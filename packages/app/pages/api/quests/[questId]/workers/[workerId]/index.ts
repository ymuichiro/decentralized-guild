import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { questWorkerFieldToQuestWorker } from '@/services/Parser';
import { getServerSession, type Session } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  GetQuestWorkerRequest,
  PutQuestWorkerRequest,
  QuestStatusEnum,
  QuestWorker,
  QuestWorkerStatusEnum,
} from 'oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'GET') {
      return await getHandle(req, res);
    }
    if (req.method === 'PUT') {
      return await putHandle(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

async function getHandle(req: NextApiRequest, res: NextApiResponse<QuestWorker>) {
  const { questId, workerId } = req.query as unknown as GetQuestWorkerRequest;

  const workerField = await prisma.questWorkerField.findUnique({
    where: { id: workerId },
    include: {
      worker: true,
    },
  });

  if (!workerField || workerField.questId !== questId) {
    return res.status(404).end();
  }

  return res.status(200).json(questWorkerFieldToQuestWorker(workerField, workerField.worker));
}

async function putHandle(req: NextApiRequest, res: NextApiResponse<QuestWorker>) {
  const { questId, workerId } = req.query as unknown as PutQuestWorkerRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  const targetQuest = await prisma.questField.findUnique({
    where: { id: questId },
    include: {
      workers: {
        include: { worker: true },
      },
    },
  });

  if (!targetQuest || targetQuest.status !== ('WANTED' as QuestStatusEnum)) {
    return res.status(404).end();
  }

  const targetWorker = targetQuest.workers.find((w) => w.id === workerId);
  if (!targetWorker || targetWorker.worker?.id !== session.user.id) {
    return res.status(404).end();
  }

  await prisma.questWorkerField.update({
    where: {
      id: workerId,
    },
    data: {
      status: 'REJECTED' as QuestWorkerStatusEnum,
    },
  });

  return res.status(204).end();
}
