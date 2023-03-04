import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { Session, getServerSession } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { DeleteUserRequest, GetUserRequest, PutUserRequest, PutUserRequestBody, User } from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'GET') {
      return getRequest(req, res);
    }
    if (req.method === 'PUT') {
      return putRequest(req, res);
    }
    if (req.method === 'DELETE') {
      return deleteRequest(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

async function getRequest(req: NextApiRequest, res: NextApiResponse<User>) {
  const { userId } = req.query as unknown as GetUserRequest;

  const session: Session | null = await getServerSession(req, res, authOptions);
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      image: true,
      createdAt: true,
      publicKey: true,
      email: session?.user.id === userId ? true : undefined,
    },
    where: { id: userId },
  });

  if (user === null) {
    return res.status(404).end();
  }

  return res.status(200).json({
    id: user.id,
    image: user.image ?? undefined,
    name: user.name ?? undefined,
    publicKey: user.publicKey ?? undefined,
    createdAt: user.createdAt,
    email: user.email ?? undefined,
  });
}

async function putRequest(req: NextApiRequest, res: NextApiResponse<void>) {
  const { userId } = req.query as unknown as PutUserRequest;
  const data = req.body as PutUserRequestBody;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id || session.user.id !== userId) {
    return res.status(401).end();
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: data.name,
    },
  });

  return res.status(204).end();
}

async function deleteRequest(req: NextApiRequest, res: NextApiResponse<void>) {
  const { userId } = req.query as unknown as DeleteUserRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id || session.user.id !== userId) {
    return res.status(401).end();
  }

  await prisma.user.delete({ where: { id: session.user.id } });
  return res.status(204).end();
}
