import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { createChatRoom, postUserMessageToChatRoom, searchChatRoom } from '@/services/ChatRoom';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { sendMail, webPushByUserId } from '@/services/Notice';
import { questWorkerFieldToQuestWorker } from '@/services/Parser';
import { Session, getServerSession } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  ChatRoom,
  GetQuestWorkersRequest,
  GetQuestWorkersResponse,
  PostQuestWorkerRequest,
  PostQuestWorkerRequestBody,
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

/** 対象クエストのワーカー一覧の取得 */
async function GET(req: NextApiRequest, res: NextApiResponse<GetQuestWorkersResponse>) {
  const { questId } = req.query as unknown as GetQuestWorkersRequest;

  const workersField = await prisma.questWorkerField.findMany({
    where: { questId },
    include: {
      worker: true,
    },
  });

  const data: GetQuestWorkersResponse['data'] = [];
  for (const workerField of workersField) {
    data.push(questWorkerFieldToQuestWorker(workerField, workerField.worker));
  }

  return res.status(200).json({ data });
}

/**
 *  @description worker が募集中の quest へ参加表明を行い、チャットルームを作成する
 *  @description 申請内容を検証の上、requester へ通知を送信する
 */
async function POST(req: NextApiRequest, res: NextApiResponse<ChatRoom>) {
  const { questId } = req.query as unknown as PostQuestWorkerRequest;
  const { proposal } = req.body as PostQuestWorkerRequestBody;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const worker = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!worker?.publicKey) {
    Logger.info('Worker public key not registered', req, { user: session.user.id });
    return res.status(400).end();
  }

  // 申請先の Quest を取得する
  const quest = await prisma.questField.findUnique({
    where: {
      id: questId,
    },
    select: {
      ownerId: true,
      ownerPublicKey: true,
      status: true,
      title: true,
      owner: { select: { email: true } },
      workers: {
        select: { worker: { select: { publicKey: true } } },
      },
    },
  });

  if (!quest || quest.status !== 'WANTED' || !quest.ownerId) {
    Logger.info('Incorrect quest format', req, { quest });
    return res.status(400).end();
  }
  if (quest.workers.some((p) => p.worker?.publicKey === worker.publicKey)) {
    Logger.info('Applications from inappropriate users', req, { quest, user: session.user.id });
    return res.status(400).end();
  }
  if (quest.ownerPublicKey === worker.publicKey) {
    Logger.info('Incorrect public key', req, { quest, worker: worker.publicKey });
    return res.status(400).end();
  }

  // 同じ userId で構成されたチャットルームがあるか確認する
  const chatRoom = await searchChatRoom(session.user.id, quest.ownerId);

  if (chatRoom) {
    const [_, updatedChatRoom] = await prisma.$transaction([
      prisma.questWorkerField.create({ data: { questId: questId, userId: session.user.id } }),
      postUserMessageToChatRoom(chatRoom.id, session.user.id, `Signed up for the quest. ${quest.title}`),
      postUserMessageToChatRoom(chatRoom.id, session.user.id, proposal),
    ]);
    if (quest.owner?.email) await sendMail(quest.owner.email, `[Decentralized Guild] Quest ${quest.title}`, proposal);
    await webPushByUserId(quest.ownerId, { title: 'Quest Proposal', message: `Quest ${quest.title}` });
    return res.status(200).json({
      createdAt: updatedChatRoom.createdAt,
      id: updatedChatRoom.id,
      lastPostedUserId: updatedChatRoom.lastPostedUserId,
      updatedAt: updatedChatRoom.updatedAt,
      isUnread: true,
      members: [],
      messages: [],
    });
  } else {
    const [_, updatedChatRoom] = await prisma.$transaction([
      prisma.questWorkerField.create({ data: { questId, userId: session.user.id } }),
      createChatRoom(session.user.id, quest.ownerId),
    ]);
    await postUserMessageToChatRoom(updatedChatRoom.id, session.user.id, `Signed up for the quest. ${quest.title}`);
    await postUserMessageToChatRoom(updatedChatRoom.id, session.user.id, proposal);
    if (quest.owner?.email) await sendMail(quest.owner.email, `[Decentralized Guild] Quest ${quest.title}`, proposal);
    await webPushByUserId(quest.ownerId, {
      title: 'Quest Proposal',
      message: `Quest ${quest.title}`,
    });
    return res.status(200).json({
      id: updatedChatRoom.id,
      createdAt: updatedChatRoom.createdAt,
      updatedAt: updatedChatRoom.updatedAt,
      lastPostedUserId: updatedChatRoom.lastPostedUserId,
      isUnread: true,
      members: [],
      messages: [],
    });
  }
}
