import { PostUserPushRequest } from '@/../oas/types';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { WebPush } from 'oas/types/models';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'POST') {
      return await postHandle(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}
async function postHandle(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query as unknown as PostUserPushRequest;
  const data = req.body as WebPush;

  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id || session.user.id !== userId) {
    return res.status(401).end();
  }

  await prisma.pushSubscriptionField.upsert({
    where: {
      userId: session.user.id,
    },
    create: {
      userId: session.user.id,
      auth: data.keys?.auth ?? '',
      endpoint: data.endpoint ?? '',
      p256dh: data.keys?.p256dh ?? '',
      expirationTime: data.expirationTime,
    },
    update: {
      userId: session.user.id,
      auth: data.keys?.auth ?? '',
      endpoint: data.endpoint ?? '',
      p256dh: data.keys?.p256dh ?? '',
      expirationTime: data.expirationTime,
    },
  });

  return res.status(204).end();
}
