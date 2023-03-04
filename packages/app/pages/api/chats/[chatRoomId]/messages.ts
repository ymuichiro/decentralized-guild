import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { postUserMessageToChatRoom } from '@/services/ChatRoom';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { sendMail, webPushByUserId } from '@/services/Notice';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  ChatMessages,
  GetChatMessagesRequest,
  GetChatMessagesResponseInner,
  PageNation,
  PostChatRoomToMessageBody,
  PostChatRoomToMessageRequest,
} from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
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

/** チャットルームのメッセージを取得する */
async function GET(req: NextApiRequest, res: NextApiResponse<GetChatMessagesResponseInner>) {
  const { chatRoomId, offset } = req.query as unknown as GetChatMessagesRequest;
  const take = 50;
  const skip = Number(offset ? offset : 0);

  const [total, messages] = await prisma.$transaction([
    prisma.chatMessageField.count({
      where: { chatRoomId },
    }),
    prisma.chatMessageField.findMany({
      where: { chatRoomId },
      include: { user: true },
      skip: skip * take,
      take,
      orderBy: { createdAt: 'asc' },
    }),
  ]);

  const response: ChatMessages[] = [];
  for (const message of messages) {
    response.push({
      id: message.id,
      body: message.body,
      createdAt: message.createdAt,
      user: message.user
        ? {
            id: message.user.id,
            name: message.user.name ?? undefined,
            createdAt: message.user.createdAt,
            email: undefined,
            image: message.user.image ?? undefined,
            publicKey: undefined,
          }
        : undefined,
    });
  }

  const pageNation: PageNation = {
    total: total,
    current: skip,
    last: Math.floor(total / take),
  };

  return res.status(200).json({ pageNation, data: response });
}

/** チャットルームへのメッセージの送信 */
async function POST(req: NextApiRequest, res: NextApiResponse<void>) {
  const { chatRoomId } = req.query as unknown as PostChatRoomToMessageRequest;
  const data = req.body as PostChatRoomToMessageBody;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const room = await prisma.chatRoomField.findUnique({
    where: { id: chatRoomId },
    include: { members: { include: { user: { select: { email: true } } } } },
  });

  if (!room || !room.members.find((member) => member.userId === session?.user.id)) {
    return res.status(401).end();
  }

  // 送信者以外の email, id 一覧の作成
  const emails: string[] = room.members
    .filter((e) => e.userId !== session.user.id)
    .filter((e) => !!e.user?.email)
    .map((e) => e.user?.email as string);
  const ids: string[] = room.members
    .filter((e) => e.userId !== session.user.id)
    .filter((e) => !!e.userId)
    .map((e) => e.userId as string);
  const title = '[Decentralized Guild] Message received.';
  emails.map((email) => sendMail(email, title, data.message));
  await Promise.all([
    postUserMessageToChatRoom(room.id, session.user.id, data.message),
    ...ids.map((id) => webPushByUserId(id, { message: data.message, title: title })),
  ]);
  return res.status(204).end();
}
