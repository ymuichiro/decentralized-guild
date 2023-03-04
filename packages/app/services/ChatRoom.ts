import prisma from '@/services/InitPrisma';
import type { ChatMemberField, ChatRoomField } from '@prisma/client';

interface ChatRoomWithMembers extends ChatRoomField {
  members: ChatMemberField[];
}

/** 対象ユーザーのチャットルーム有無を調べる */
export async function searchChatRoom(...users: string[]): Promise<ChatRoomWithMembers | undefined> {
  const chatRooms = await prisma.chatRoomField.findMany({
    where: {
      members: {
        every: {
          userId: {
            in: users,
          },
        },
      },
    },
    include: {
      members: true,
    },
  });
  return chatRooms.find((c) => c.members.length === users.length);
}

/** ユーザーのメッセージを送信する */
export function postUserMessageToChatRoom(roomId: string, userId: string, message: string) {
  return prisma.chatRoomField.update({
    where: {
      id: roomId,
    },
    data: {
      lastPostedUserId: userId,
      unreads: {
        updateMany: {
          where: {
            userId: { not: userId },
          },
          data: { isUnread: true },
        },
      },
      messages: {
        create: {
          body: message,
          userId: userId,
        },
      },
    },
  });
}

/** 対象ユーザーのチャットルームを作成する */
export function createChatRoom(...users: string[]) {
  const usersFields: { userId: string }[] = [];
  for (const u of users) {
    usersFields.push({ userId: u });
  }

  return prisma.chatRoomField.create({
    data: {
      lastPostedUserId: 'system',
      unreads: {
        create: usersFields,
      },
      members: {
        create: usersFields,
      },
    },
  });
}
