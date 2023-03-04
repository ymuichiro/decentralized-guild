import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { userFieldToUser } from '@/services/Parser';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { GetUsersRequest, GetUsersResponseInner, PageNation } from 'oas';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'GET') {
      return getRequest(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

async function getRequest(req: NextApiRequest, res: NextApiResponse<GetUsersResponseInner>) {
  const { offset } = req.query as GetUsersRequest;

  const take = 20;
  const skip = Number(offset ? offset : 0);

  const [total, users] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        createdAt: true,
        publicKey: true,
      },
      skip: skip * take,
      take,
    }),
  ]);

  const data: GetUsersResponseInner['data'] = [];

  for (const user of users) {
    data.push(userFieldToUser(user));
  }

  const pageNation: PageNation = {
    total: total,
    current: skip,
    last: Math.floor(total / take),
  };

  return res.status(200).json({ data, pageNation });
}
