import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { createChatRoom, postUserMessageToChatRoom, searchChatRoom } from '@/services/ChatRoom';
import { proposalApprovalContract } from '@/services/ContractSymbol';
import { ValidationError } from '@/services/Error';
import { transactionRoutesApi } from '@/services/InitOas';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import { sendMail, webPushByUserId } from '@/services/Notice';
import { VerificationValues, verifyContractTransaction } from '@/services/Verification';
import { getServerSession, type Session } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type {
  PostQuestApprovalRequest,
  PostQuestApprovalResponse,
  PutQuestApprovalOperationRequest,
  PutQuestApprovalRequest,
  QuestStatusEnum,
  QuestWorkerStatusEnum,
} from 'oas/types';
import type { AggregateTransactionExtendedDTO } from 'symbol-oas/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'POST') {
      return await postRequest(req, res);
    }
    if (req.method === 'PUT') {
      return await putRequest(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

/** quest owner による提案の承認 */
async function postRequest(req: NextApiRequest, res: NextApiResponse<PostQuestApprovalResponse>) {
  const { questId, workerId } = req.query as unknown as PostQuestApprovalRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  // validation
  const targetQuest = await prisma.questField.findUnique({
    where: { id: questId },
    include: { workers: { include: { worker: true } }, reward: true, owner: true },
  });

  if (
    !targetQuest ||
    targetQuest.ownerId !== session.user.id ||
    targetQuest.status !== ('WANTED' as QuestStatusEnum) ||
    !targetQuest.owner
  ) {
    return res.status(404).end();
  }

  const targetWorker = targetQuest.workers.find((w) => w.id === workerId);
  if (!targetWorker || !targetWorker.userId || !targetWorker.worker) {
    return res.status(404).end();
  }

  // handle contract
  const network = new NetworkSymbol();
  const approvalContract = proposalApprovalContract(
    targetQuest,
    targetQuest.reward,
    targetQuest.owner,
    targetWorker.worker,
    network
  );

  // approval
  await prisma.questField.update({
    where: { id: questId },
    data: {
      questTransactionInfo: {
        upsert: {
          create: {
            deadline: targetQuest.deadline,
            proof: approvalContract.secretLock.proof,
            secret: approvalContract.secretLock.secret,
            questId: targetQuest.id,
          },
          update: {
            deadline: targetQuest.deadline,
            proof: approvalContract.secretLock.proof,
            secret: approvalContract.secretLock.secret,
            questId: targetQuest.id,
          },
        },
      },
    },
    include: {
      workers: {
        where: { userId: workerId },
      },
    },
  });

  // 署名用トランザクションを生成し、クライアントサイドで定期的にノードへステータス確認する画面を開いてOKとなったらHashを送信する
  return res.status(200).json({
    transaction: approvalContract.aggregateTransaction.serialize(),
  });
}

/** quest owner がアナウンス済み transaction hash を受け取って正しければ発注処理を完了とする */
async function putRequest(req: NextApiRequest, res: NextApiResponse<void>) {
  const { questId, workerId } = req.query as unknown as PutQuestApprovalOperationRequest;
  const { transactionHash } = req.body as PutQuestApprovalRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).end();
  }

  // 対象のクエストを取得する
  const quest = await prisma.questField.findUnique({
    where: {
      id: questId,
    },
    include: {
      questTransactionInfo: true,
      reward: true,
      owner: {
        select: { email: true },
      },
    },
  });

  if (
    !quest ||
    !quest.owner ||
    session.user.id !== quest.ownerId ||
    (quest.status as QuestStatusEnum) !== 'WANTED' ||
    !quest.questTransactionInfo ||
    quest.questTransactionInfo?.status !== 'UNCONFIRMED' ||
    !quest.questTransactionInfoId
  ) {
    Logger.trace('quest info is not match', req, quest ?? {});
    return res.status(404).end();
  }

  // 対象の Secret を取得する
  const secretLockField = await prisma.questTransactionInfo.findUnique({
    where: {
      id: quest.questTransactionInfoId,
    },
  });

  if (
    !secretLockField ||
    secretLockField.transactionHash ||
    secretLockField.status !== 'UNCONFIRMED' ||
    secretLockField.deadline.getTime() < Date.now()
  ) {
    Logger.trace('secret lock field is not match', req, secretLockField ?? {});
    return res.status(404).end();
  }

  // アナウンスされた対象のトランザクションが正常な形式か確認する
  let aggregateTransactionInfo: AggregateTransactionExtendedDTO | undefined;
  try {
    const tx = await transactionRoutesApi.getConfirmedTransaction({ transactionId: transactionHash });
    aggregateTransactionInfo = tx.transaction;
  } catch (err) {
    Logger.error(err, 'Communication with blockchain failed.');
    return res.status(404).end();
  }

  const verifyValues: VerificationValues = {
    ownerPublicKey: quest.ownerPublicKey,
    questDescription: quest.description,
    questId: quest.id,
    questTitle: quest.title,
    reward: quest.reward === null ? 0 : quest.reward.amount,
    rewardChain: quest.reward === null ? 'XYM' : quest.reward.chain,
    secret: secretLockField.secret,
  };
  const transactionVerifyResult: boolean = verifyContractTransaction(aggregateTransactionInfo, verifyValues);

  if (!transactionVerifyResult) {
    Logger.error(new ValidationError(`Incorrect transaction format. transaction hash is ${transactionHash}`));
    Logger.trace('Incorrect transaction format', req, { verifyValues });
    return res.status(400).end();
  }

  // データベース上のトランザクションのステータスを変更する
  const worker = await prisma.questWorkerField.findUnique({ where: { id: workerId }, include: { worker: true } });
  if (!worker?.worker?.publicKey) {
    Logger.error(new ValidationError(`worker does not exist. workerId is ${workerId}`));
    return res.status(404).end();
  }

  await prisma.$transaction([
    prisma.questField.update({
      where: { id: questId },
      data: {
        status: 'WORKING' as QuestStatusEnum,
        workers: {
          updateMany: {
            where: { NOT: { id: worker.id } },
            data: { status: 'REJECTED' as QuestWorkerStatusEnum },
          },
          update: {
            where: { id: worker.id },
            data: { status: 'ACCEPTED' as QuestWorkerStatusEnum },
          },
        },
      },
      include: {
        workers: {
          where: { userId: workerId },
        },
      },
    }),
    prisma.questTransactionInfo.update({
      where: { id: quest.questTransactionInfoId },
      data: {
        status: 'CONFIRMED',
        transactionHash: transactionHash,
      },
    }),
  ]);

  // ChatMessage をチャットルームへ送信する
  const chatRoom = await searchChatRoom(quest.ownerId, worker.worker.id);

  const title: string = `Quest Approval "${quest.title}"`;
  const message: string = 'Quest order processing has been completed.';
  if (chatRoom) {
    await postUserMessageToChatRoom(chatRoom.id, worker.worker.id, `${title} : ${message}`);
  } else {
    await createChatRoom(`${title}: ${message}`, quest.ownerId, worker.worker.id);
  }

  await Promise.all([
    quest.owner.email &&
      sendMail(
        quest.owner.email,
        `[Decentralized Guild] Quest ${quest.title}`,
        `${worker.worker.name} has approved your quest.`
      ),
    webPushByUserId(quest.ownerId, { title, message }),
    webPushByUserId(worker.worker.id, { title, message }),
  ]);

  return res.status(204).end();
}
