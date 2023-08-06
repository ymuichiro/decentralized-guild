import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import {
  questWorkerFieldToQuestWorker,
  rewardFieldToReward,
  rewardToRewardField,
  userFieldToUser,
} from '@/services/Parser';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  GetQuestsRequest,
  GetQuestsResponseInner,
  PageNation,
  Quest,
  QuestStatusEnum,
  QuestUpdateRequest,
  QuestWorker,
} from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'GET') {
      return await GET(req, res);
    }
    if (req.method === 'POST') {
      return await POST(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

/** クエストの検索 */
async function GET(req: NextApiRequest, res: NextApiResponse<GetQuestsResponseInner>): Promise<void> {
  const { offset, requesterPublicKey, workerPublicKey, keyword } = req.query as GetQuestsRequest;

  const take = 20;
  const skip = Number(offset ? offset : 0);

  const [total, quests] = await prisma.$transaction([
    prisma.questField.count({
      where: {
        OR: [{ title: { contains: keyword } }, { description: { contains: keyword } }],
        ownerPublicKey: requesterPublicKey,
        workers: {
          some: workerPublicKey ? { worker: { publicKey: workerPublicKey } } : undefined,
        },
      },
    }),
    prisma.questField.findMany({
      include: {
        reward: true,
        owner: true,
        questTransactionInfo: true,
        workers: {
          include: { worker: true },
        },
      },
      where: {
        OR: [{ title: { contains: keyword } }, { description: { contains: keyword } }],
        ownerPublicKey: requesterPublicKey,
        workers: {
          some: workerPublicKey ? { worker: { publicKey: workerPublicKey } } : undefined,
        },
      },
      skip: skip * take,
      take,
      orderBy: { updatedAt: 'desc' },
    }),
  ]);

  const data: GetQuestsResponseInner['data'] = [];

  for (const quest of quests) {
    const workers: QuestWorker[] = [];
    for (const worker of quest.workers) {
      workers.push(questWorkerFieldToQuestWorker(worker, worker.worker));
    }

    data.push({
      id: quest.id,
      title: quest.title,
      description: quest.description,
      status: quest.status as QuestStatusEnum,
      transactionHash: quest.questTransactionInfo?.transactionHash ?? undefined,
      deadline: quest.deadline,
      createdAt: quest.createdAt,
      updatedAt: quest.updatedAt,
      ownerPublicKey: quest.ownerPublicKey,
      owner: userFieldToUser(quest.owner),
      reward: quest.reward ? rewardFieldToReward(quest.reward) : undefined,
      workers: workers,
    });
  }

  const pageNation: PageNation = {
    total: total,
    current: skip,
    last: Math.floor(total / take),
  };

  return res.status(200).json({ data, pageNation });
}

/** 新規クエストの作成 */
async function POST(req: NextApiRequest, res: NextApiResponse<Quest>) {
  const data = req.body as QuestUpdateRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const currentUser = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (currentUser === null) {
    return res.status(401).end();
  }
  if (currentUser.publicKey === null) {
    Logger.info('A user without publickey tried to create a quest', req, session.user);
    return res.status(404).end();
  }

  const newQuestData = await prisma.questField.create({
    data: {
      title: data.title,
      description: data.description,
      ownerPublicKey: currentUser.publicKey,
      deadline: data.deadline,
      reward: data.reward ? { create: rewardToRewardField(data.reward) } : undefined,
      owner: {
        connect: {
          id: currentUser.id,
        },
      },
    },
    include: {
      reward: true,
    },
  });

  Logger.info('A new quest has been created', req, newQuestData);

  return res.status(200).json({
    id: newQuestData.id,
    createdAt: newQuestData.createdAt,
    deadline: newQuestData.deadline,
    description: newQuestData.description,
    status: newQuestData.status as QuestStatusEnum,
    title: newQuestData.title,
    updatedAt: newQuestData.updatedAt,
    ownerPublicKey: currentUser.publicKey,
    reward: newQuestData.reward ? rewardFieldToReward(newQuestData.reward) : undefined,
    owner: userFieldToUser(currentUser),
    transactionHash: undefined,
    workers: [],
  });
}
