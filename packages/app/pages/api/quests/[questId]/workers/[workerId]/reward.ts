import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { createChatRoom, postUserMessageToChatRoom, searchChatRoom } from '@/services/ChatRoom';
import { announceBySystemAccount, rewardContract } from '@/services/ContractSymbol';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import { webPushByUserId } from '@/services/Notice';
import { getServerSession, type Session } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { PostQuestWorkerRewardRequest, QuestStatusEnum } from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'POST') {
      return await POST(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}
async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { questId, workerId } = req.query as unknown as PostQuestWorkerRewardRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const quest = await prisma.questField.findUnique({
    where: {
      id: questId,
    },
    include: {
      questTransactionInfo: true,
    },
  });

  if (!quest || !quest.questTransactionInfo) {
    Logger.info('The specified Quest was not found', req, { questId, workerId });
    return res.status(404).end();
  }

  if (!quest.ownerId || quest.status !== ('WORKING' as QuestStatusEnum) || quest.deadline.getTime() < Date.now()) {
    Logger.info('Incorrect value', req, { questId, workerId, quest });
    return res.status(400).end();
  }

  if (quest.ownerId !== session.user.id) {
    Logger.info('Not authorized to perform this operation.', req, { quest, workerId, sessionId: session.user.id });
    return res.status(403).end();
  }

  const worker = await prisma.questWorkerField.findUnique({
    where: { id: workerId },
    include: {
      worker: {
        select: {
          id: true,
          publicKey: true,
        },
      },
    },
  });

  if (!worker || !worker.worker?.publicKey) {
    Logger.info('Incorrect worker value', req, { questId, workerId, quest });
    return res.status(400).end();
  }

  const network: NetworkSymbol = new NetworkSymbol();
  const announced: { [key: string]: any } = await announceBySystemAccount(
    rewardContract(
      quest.questTransactionInfo.secret,
      quest.questTransactionInfo.proof,
      quest.ownerPublicKey,
      worker.worker.publicKey,
      network
    ),
    network
  );
  Logger.info('Transaction successfully announced!', req, announced);

  // Chat や通知の送信
  let chatRoomId: string | undefined = (await searchChatRoom(worker.worker.id, quest.ownerId))?.id;
  const title: string = 'Quest status update';
  const message: string = 'Delivery has been approved';
  if (!chatRoomId) {
    chatRoomId = (await createChatRoom('Chat room create by System')).id;
  }

  await Promise.all([
    postUserMessageToChatRoom(chatRoomId, worker.worker.id, message),
    webPushByUserId(quest.ownerId, { title, message }),
    webPushByUserId(worker.worker.id, { title, message }),
  ]);

  return res.status(204).end();
}
