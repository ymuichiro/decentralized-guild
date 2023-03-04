import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  ChatRoom,
  ChatRoomMember,
  ChatRoomMessage,
  GetChatRoomsResponseInner,
  PageNation,
  PostChatRoomRequestInner,
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
    if (req.method === 'PUT') {
      return await PUT(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

/** チャットルームの取得 */
async function GET(req: NextApiRequest, res: NextApiResponse<GetChatRoomsResponseInner>) {
  const session: Session | null = await getServerSession(req, res, authOptions);
  const { offset } = req.query;
  const take = 20;
  const skip = Number(offset ? offset : 0);

  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const [total, rooms] = await prisma.$transaction([
    prisma.chatRoomField.count({
      where: {
        members: {
          some: { userId: session.user.id },
        },
      },
    }),
    prisma.chatRoomField.findMany({
      where: {
        members: {
          some: { userId: session.user.id },
        },
      },
      include: {
        members: {
          include: {
            user: { select: { name: true } },
          },
        },
        unreads: {
          where: { userId: session.user.id },
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      skip: skip * take,
      take,
      orderBy: { updatedAt: 'desc' },
    }),
  ]);

  const data: GetChatRoomsResponseInner['data'] = [];

  for (const room of rooms) {
    const members: ChatRoomMember[] = [];
    for (const member of room.members) {
      members.push({
        id: member.id,
        userId: member.userId ?? undefined,
        name: member.user?.name ?? undefined,
      });
    }
    const messages: ChatRoomMessage[] = [];
    for (const message of room.messages) {
      messages.push({
        id: message.id,
        body: message.body,
        createdAt: message.createdAt,
        userId: message.userId ?? undefined,
      });
    }
    const isUnreadCurrentUser = room.unreads.length > 0 ? room.unreads[0].isUnread : false;
    data.push({
      id: room.id,
      createdAt: room.createdAt,
      lastPostedUserId: room.lastPostedUserId,
      updatedAt: room.updatedAt,
      isUnread: isUnreadCurrentUser,
      members,
      messages,
    });
  }

  const pageNation: PageNation = {
    total: total,
    current: skip,
    last: Math.floor(total / take),
  };

  return res.status(200).json({ data, pageNation });
}

/** 新規チャットルームの作成 */
async function POST(req: NextApiRequest, res: NextApiResponse<ChatRoom>) {
  const session: Session | null = await getServerSession(req, res, authOptions);
  const { data } = req.body as PostChatRoomRequestInner;
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  // 渡された userId が存在するか確認
  const users: { userId: string }[] = [];

  for (const recipient of data.recipients) {
    const user = await prisma.user.findUnique({ where: { id: recipient } });
    if (user === null) {
      return res.status(404).end();
    } else {
      users.push({ userId: user.id });
    }
  }

  if (users.some((user) => user === null)) {
  }

  // 該当ユーザーのみが所属するチャットルームを取得する
  const chatRoom = await prisma.chatRoomField.findFirst({
    where: {
      members: {
        every: {
          userId: { in: data.recipients },
        },
      },
    },
    include: {
      members: {
        include: {
          user: { select: { name: true } },
        },
      },
      messages: {
        take: 3,
      },
    },
  });

  // null = 新規作成
  if (chatRoom === null) {
    const chatRoomField = await prisma.chatRoomField.create({
      data: {
        lastPostedUserId: session.user.id,
        members: { create: users },
        unreads: {
          create: users.map((user) => ({
            userId: user.userId,
          })),
        },
      },
      include: {
        members: {
          include: {
            user: { select: { name: true } },
          },
        },
        messages: true,
      },
    });
    return res.status(200).json({
      id: chatRoomField.id,
      createdAt: chatRoomField.createdAt,
      updatedAt: chatRoomField.updatedAt,
      lastPostedUserId: chatRoomField.lastPostedUserId,
      isUnread: true,
      members: chatRoomField.members.map((member) => ({
        id: member.id,
        userId: member.userId ?? undefined,
        name: member.user?.name ?? undefined,
      })),
      messages: chatRoomField.messages.map((message) => ({
        id: message.id,
        body: message.body,
        createdAt: message.createdAt,
        userId: message.userId ?? undefined,
      })),
    });
  } else {
    return res.status(200).json({
      id: chatRoom.id,
      createdAt: chatRoom.createdAt,
      updatedAt: chatRoom.updatedAt,
      lastPostedUserId: chatRoom.lastPostedUserId,
      isUnread: false,
      members: chatRoom.members.map((member) => ({
        id: member.id,
        userId: member.userId ?? undefined,
        name: member.user?.name ?? undefined,
      })),
      messages: chatRoom.messages.map((message) => ({
        id: message.id,
        body: message.body,
        createdAt: message.createdAt,
        userId: message.userId ?? undefined,
      })),
    });
  }
}

/** 全てのチャットルームを既読にする */
async function PUT(req: NextApiRequest, res: NextApiResponse<void>) {
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  await prisma.chatRoomUnread.updateMany({
    where: { userId: session.user.id },
    data: { isUnread: false },
  });

  return res.status(204).end();
}
