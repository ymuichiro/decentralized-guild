import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { questWorkerFieldToQuestWorker, rewardFieldToReward, userFieldToUser } from '@/services/Parser';
import { Session, getServerSession } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  DeleteQuestRequest,
  GetQuestRequest,
  PutQuestRequest,
  Quest,
  QuestStatusEnum,
  QuestUpdateRequest,
} from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'GET') {
      return await GET(req, res);
    }
    if (req.method === 'PUT') {
      return await PUT(req, res);
    }
    if (req.method === 'DELETE') {
      return await DELETE(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

/** 対象クエストの詳細取得 */
async function GET(req: NextApiRequest, res: NextApiResponse<Quest>) {
  const { questId } = req.query as unknown as GetQuestRequest;

  const quest = await prisma.questField.findUnique({
    where: { id: questId },
    include: {
      owner: true,
      reward: true,
      questTransactionInfo: true,
      workers: {
        include: {
          worker: true,
        },
      },
    },
  });

  if (!quest) {
    return res.status(404).end();
  }

  return res.status(200).json({
    id: quest.id,
    createdAt: quest.createdAt,
    deadline: quest.deadline,
    description: quest.description,
    ownerPublicKey: quest.ownerPublicKey,
    status: quest.status as QuestStatusEnum,
    title: quest.title,
    updatedAt: quest.updatedAt,
    transactionHash: quest.questTransactionInfo?.transactionHash
      ? quest.questTransactionInfo.transactionHash
      : undefined,
    workers: quest.workers.map((w) => questWorkerFieldToQuestWorker(w, w.worker)),
    owner: quest.owner ? userFieldToUser(quest.owner) : undefined,
    reward: quest.reward ? rewardFieldToReward(quest.reward) : undefined,
  });
}

/** 対象クエストの更新 */
async function PUT(req: NextApiRequest, res: NextApiResponse<void>) {
  const { questId } = req.query as unknown as PutQuestRequest;
  const data = req.body as QuestUpdateRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const currentUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { publicKey: true },
  });

  if (currentUser === null || !currentUser.publicKey) {
    return res.status(401).end();
  }

  const targetQuestsExist = await prisma.questField.findFirst({
    where: {
      id: questId,
      ownerPublicKey: currentUser.publicKey,
    },
  });

  if (targetQuestsExist === null) {
    return res.status(401).end();
  }

  // 募集中以外の案件はユーザーによる削除は禁止とする
  if (targetQuestsExist.status !== 'WANTED') {
    return res.status(404).end();
  }

  // ユーザー情報が照合できたら、情報を更新する
  await prisma.questField.update({
    where: {
      id: questId,
    },
    data: {
      title: data.title,
      description: data.description,
      reward: {
        upsert: data.reward ? { create: data.reward, update: data.reward } : undefined,
      },
    },
  });

  return res.status(204).end();
}

/** 対象クエストの削除 */
async function DELETE(req: NextApiRequest, res: NextApiResponse<void>) {
  const { questId } = req.query as unknown as DeleteQuestRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  // if: 指定のクエストIDの所有者はクエスト作成時のパブリックキーを持っているか検証する
  const currentUser = await prisma.user.findUnique({ where: { id: session.user.id }, select: { publicKey: true } });
  if (currentUser === null || !currentUser.publicKey) {
    return res.status(401).end();
  }

  const targetQuestsExist = await prisma.questField.findFirst({
    where: {
      id: questId,
      ownerPublicKey: currentUser.publicKey,
    },
  });

  if (targetQuestsExist === null) {
    return res.status(401).end();
  }

  // 募集中以外の案件はユーザーによる削除は禁止とする
  if (targetQuestsExist.status !== 'WANTED') {
    return res.status(404).end();
  }

  // 削除する
  await prisma.questField.delete({
    where: { id: questId },
  });

  return res.status(204).end();
}
