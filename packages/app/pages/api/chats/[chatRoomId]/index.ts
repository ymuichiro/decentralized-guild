import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { ChatRoom, ChatRoomMember, ChatRoomMessage, GetChatInfoRequest, PutChatInfoRequest } from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'GET') {
      return await GET(req, res);
    }
    if (req.method === 'PUT') {
      return await PUT(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

/** 指定されたチャットルームの詳細を取得する */
async function GET(req: NextApiRequest, res: NextApiResponse<ChatRoom>) {
  const { chatRoomId } = req.query as unknown as GetChatInfoRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const chatRoom = await prisma.chatRoomField.findUnique({
    where: { id: chatRoomId as string },
    include: {
      members: true,
      unreads: {
        where: { userId: session.user.id },
      },
      messages: {
        // 最新のメッセージのみ取得。メッセージ全体は別APIで取得する。
        orderBy: { createdAt: 'asc' },
        take: 1,
      },
    },
  });

  if (!chatRoom || chatRoom.members.length === 0 || chatRoom.members.every((e) => e.userId !== session?.user.id)) {
    return res.status(404).end();
  }

  const isUnreadCurrentUser: boolean = chatRoom.unreads.length > 0 ? chatRoom.unreads[0].isUnread : false;
  const messages: ChatRoomMessage[] = [];
  const members: ChatRoomMember[] = [];
  for (const message of chatRoom.messages) {
    messages.push({
      id: message.id,
      body: message.body,
      createdAt: message.createdAt,
      userId: message.userId ?? undefined,
    });
  }
  for (const member of chatRoom.members) {
    members.push({
      id: member.id,
      userId: member.userId ?? undefined,
    });
  }
  return res.status(200).json({
    id: chatRoom.id,
    lastPostedUserId: chatRoom.lastPostedUserId,
    updatedAt: chatRoom.updatedAt,
    createdAt: chatRoom.createdAt,
    isUnread: isUnreadCurrentUser,
    messages: messages,
    members: members,
  });
}

/** チャットルームを既読にする。（対象ユーザーのみ） */
async function PUT(req: NextApiRequest, res: NextApiResponse<void>) {
  const { chatRoomId } = req.query as unknown as PutChatInfoRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const r = await prisma.$transaction(async () => {
    const room = await prisma.chatRoomField.findUnique({ where: { id: chatRoomId }, include: { unreads: true } });

    if (!room) {
      return 404;
    }

    const unread = room.unreads.find((e) => e.userId === session.user.id);

    if (!unread) {
      return 404;
    }

    await prisma.chatRoomUnread
      .upsert({
        where: {
          id: unread.id,
        },
        update: {
          isUnread: false,
        },
        create: {
          isUnread: false,
          userId: session.user.id,
          chatRoomId: room.id,
        },
      })
      .catch((err) => {
        Logger.warn('Error returned during sqlite update.', req, err);
      });
  });

  if (r === 404) {
    return res.status(404).end();
  }

  return res.status(204).end();
}
