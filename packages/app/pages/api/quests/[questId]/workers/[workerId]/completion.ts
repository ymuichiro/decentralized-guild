import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { createChatRoom, postUserMessageToChatRoom, searchChatRoom } from '@/services/ChatRoom';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { sendMail, webPushByUserId } from '@/services/Notice';
import { Session, getServerSession } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { PostQuestWorkerCompletionRequest, QuestStatusEnum } from 'oas/types';

/**
 * api/quests/[questId]/workers/[workerId]/completion
 */
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

/** worker が quest owner に対して検収依頼を行う */
async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { questId, workerId } = req.query as unknown as PostQuestWorkerCompletionRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  // 対象のクエストを取得
  const quest = await prisma.questField.findFirst({
    where: {
      id: questId,
      workers: {
        some: {
          id: workerId,
          AND: {
            status: 'ACCEPTED',
          },
        },
      },
    },
    include: {
      owner: {
        select: { email: true },
      },
      workers: {
        where: {
          id: workerId,
        },
      },
    },
  });

  if (!quest || !quest.owner) {
    Logger.info('The specified Quest was not found', req, { questId, workerId });
    return res.status(404).end();
  }

  if (!quest.ownerId || quest.status !== ('WORKING' as QuestStatusEnum) || quest.deadline.getTime() < Date.now()) {
    Logger.info('Incorrect value', req, { questId, workerId, quest });
    return res.status(400).end();
  }

  const worker = quest.workers[0];
  if (session.user.id !== worker.userId || !worker.userId) {
    const message: string = 'Only the worker who received the order can report its completion.';
    Logger.info(message, req, { message, questId, workerId });
    return res.status(403).end();
  }

  // Chat や通知の送信
  let chatRoomId: string | undefined = (await searchChatRoom(worker.userId, quest.ownerId))?.id;
  const title: string = 'Quest status update';
  const message: string = 'Worker requested acceptance inspection';
  if (!chatRoomId) {
    chatRoomId = (await createChatRoom('Chat room create by System')).id;
  }

  await Promise.all([
    quest.owner.email &&
      sendMail(
        quest.owner.email,
        `[Decentralized Guild] Quest ${quest.title} Completion request`,
        `A completion request has been received. Please check and evaluate the delivery.`
      ),
    postUserMessageToChatRoom(chatRoomId, worker.userId, message),
    webPushByUserId(quest.ownerId, { title, message }),
    webPushByUserId(worker.userId, { title, message }),
  ]);

  return res.status(204).end();
}
