import { AccountSystem } from '@/services/AccountSystem';
import { transactionRoutesApi } from '@/services/InitOas';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import type { QuestField, RewardField, User as UserField } from '@prisma/client';
import crypto from 'crypto';
import { sha3_256, type Hasher } from 'js-sha3';
import type { Quest } from 'oas/types';
import { UInt64 } from 'symbol-sdk/dist/src/model/UInt64';
import { Account, Address, PublicAccount } from 'symbol-sdk/dist/src/model/account';
import { LockHashAlgorithm } from 'symbol-sdk/dist/src/model/lock/LockHashAlgorithm';
import { PlainMessage } from 'symbol-sdk/dist/src/model/message';
import { Mosaic } from 'symbol-sdk/dist/src/model/mosaic/Mosaic';
import { MosaicId } from 'symbol-sdk/dist/src/model/mosaic/MosaicId';
import { SignedTransaction } from 'symbol-sdk/dist/src/model/transaction';
import { AggregateTransaction } from 'symbol-sdk/dist/src/model/transaction/AggregateTransaction';
import { Deadline } from 'symbol-sdk/dist/src/model/transaction/Deadline';
import { SecretLockTransaction } from 'symbol-sdk/dist/src/model/transaction/SecretLockTransaction';
import { SecretProofTransaction } from 'symbol-sdk/dist/src/model/transaction/SecretProofTransaction';
import { Transaction } from 'symbol-sdk/dist/src/model/transaction/Transaction';
import { TransferTransaction } from 'symbol-sdk/dist/src/model/transaction/TransferTransaction';
import WebSocket from 'ws';

const systemFee: number = Number(process.env.NEXT_PUBLIC_SYSTEM_FEE);
const systemPrivateKey: string = process.env.SYMBOL_ADMIN_PRIVATEKEY as string;

interface ContractSystemMessageBase {
  type: 'QuestContractSystemMessage' | 'QuestApprovalFeeSystemMessage';
}

interface QuestApprovalFeeSystemMessage extends ContractSystemMessageBase {
  data: {
    quest: Pick<Quest, 'id' | 'title'>;
    owner: Pick<UserField, 'publicKey' | 'createdAt'>;
  };
}

interface QuestContractSystemMessage extends ContractSystemMessageBase {
  data: {
    // 本文は今後 Transaction へ Binary として格納する。直接書き込むと Failure_Transfer_Message_Too_Large が発生する
    quest: Pick<Quest, 'id' | 'title' /*| 'description'*/ | 'createdAt'>;
    owner: Pick<UserField, 'publicKey' | 'createdAt'>;
    reward: RewardField | null;
  };
}

/** 人間向けの数値をネットワーク向けに変換する */
function getCurrencyAmountUInt64(amount: number): UInt64 {
  return UInt64.fromUint(amount * Math.pow(10, 6));
}

/** Mosaicの人間向けの数値をネットワーク向けに変換する */
function getMosaicAmountUInt64(amount: number, divisivility: number): UInt64 {
  return UInt64.fromUint(amount * Math.pow(10, divisivility));
}

/**
 * Symbol のブロック生成サイクル30秒に対して、指定した日付迄に何ブロック生成されるかカウントする
 */
function getBlocksNumFromDate(unixtime: number) {
  const timeDiff = Math.abs(unixtime - Date.now());
  const toSecond = Math.floor(timeDiff / 1000);
  return Math.floor(toSecond / 30) + 1;
}

interface ProposalApprovalContractReturn {
  /** 署名前のトランザクション。Hashをバックエンドへ保管する */
  aggregateTransaction: AggregateTransaction;
  secretLock: {
    secret: string;
    proof: string;
  };
}

/**
 * Quest への申し込みを承認し、ブロックチェーン上へ契約処理を行う。
 * バックエンド側でトランザクションを作成し、データベースへトランザクションHashやSecretを格納する
 *
 * **コントラクトの内容**
 * - AggregateConplete
 * - 契約内容をブロックチェーンへ記録する（Transfer）
 * - ユーザーへの報酬支払いを登録する（SecretLock）
 * - システムへ手数料を支払う
 */
export function proposalApprovalContract(
  quest: QuestField,
  reward: RewardField | null,
  owner: UserField,
  worker: UserField,
  network: NetworkSymbol
): ProposalApprovalContractReturn {
  const questApprovalFeeSystemMessage: QuestApprovalFeeSystemMessage = {
    type: 'QuestApprovalFeeSystemMessage',
    data: {
      quest: {
        id: quest.id,
        title: quest.title,
      },
      owner: {
        createdAt: owner.createdAt,
        publicKey: owner.publicKey,
      },
    },
  };

  const questContractSystemMessage: QuestContractSystemMessage = {
    type: 'QuestContractSystemMessage',
    data: {
      quest: {
        id: quest.id,
        title: quest.title,
        createdAt: quest.createdAt,
      },
      owner: {
        createdAt: owner.createdAt,
        publicKey: owner.publicKey,
      },
      reward: reward,
    },
  };

  if (!worker.publicKey || !owner.publicKey) {
    throw new Error('owner or worker publicKey is undefined');
  }

  const ownerPublicAccount: PublicAccount = PublicAccount.createFromPublicKey(owner.publicKey, network.networkType);
  const systemPublicAccount: PublicAccount = new AccountSystem(network.networkType).account;
  const workerPublicAccount: PublicAccount = PublicAccount.createFromPublicKey(worker.publicKey, network.networkType);
  const random: Buffer = crypto.randomBytes(20);
  const hash: Hasher = sha3_256.create();
  const secret: string = hash.update(random).hex();
  const proof: string = random.toString('hex');

  // system fee の支払い
  const transactionPaySystemFees: Transaction = TransferTransaction.create(
    Deadline.create(network.epochAdjustment),
    systemPublicAccount.address,
    [new Mosaic(new MosaicId(network.currencyMosaicId), getCurrencyAmountUInt64(systemFee))],
    PlainMessage.create(JSON.stringify(questApprovalFeeSystemMessage)),
    network.networkType
  ).setMaxFee(100);

  // worker への契約書発行
  const transactionContract: Transaction = TransferTransaction.create(
    Deadline.create(network.epochAdjustment),
    systemPublicAccount.address,
    [new Mosaic(new MosaicId(network.currencyMosaicId), getCurrencyAmountUInt64(0))],
    PlainMessage.create(JSON.stringify(questContractSystemMessage)),
    network.networkType
  ).setMaxFee(100);

  // worker への報酬発行（現時点では Symbol.xym のみ）
  const transactionReward: Transaction = SecretLockTransaction.create(
    Deadline.create(network.epochAdjustment),
    new Mosaic(new MosaicId(network.currencyMosaicId), getCurrencyAmountUInt64(reward?.amount ?? 0)),
    UInt64.fromUint(getBlocksNumFromDate(quest.deadline.getTime())), // クエスト完了期日までロックする
    LockHashAlgorithm.Op_Sha3_256,
    secret,
    workerPublicAccount.address,
    network.networkType
  ).setMaxFee(100);

  const aggregateTransaction: AggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(network.epochAdjustment),
    [
      transactionPaySystemFees.toAggregate(ownerPublicAccount),
      transactionContract.toAggregate(ownerPublicAccount),
      transactionReward.toAggregate(ownerPublicAccount),
    ],
    network.networkType,
    [],
    getCurrencyAmountUInt64(1)
  );

  return {
    aggregateTransaction: aggregateTransaction,
    secretLock: {
      secret: secret,
      proof: proof,
    },
  };
}

/**
 * クエストの依頼者がワーカーからの納品物を承認した際の報酬送信処理を行う
 * トランザクションはシステムが自動的に送信する為、ユーザー側での承認作業は不要。
 *
 * **コントラクトの内容**
 * - AggregateConplete
 * - システムが SecretProofTransaction を発行し、有効な SecretLockTransaction を解除する
 * - Worker と Requester に対して RTP を送信する
 */
export function rewardContract(
  secret: string,
  proof: string,
  ownerPublicKey: string,
  workerPublicKey: string,
  network: NetworkSymbol
): AggregateTransaction {
  const ownerAddress: Address = Address.createFromPublicKey(ownerPublicKey, network.networkType);
  const workerAddress: Address = Address.createFromPublicKey(workerPublicKey, network.networkType);
  const systemAccount: PublicAccount = Account.createFromPrivateKey(
    systemPrivateKey,
    network.networkType
  ).publicAccount;

  const secretProofTransaction: Transaction = SecretProofTransaction.create(
    Deadline.create(network.epochAdjustment),
    LockHashAlgorithm.Op_Sha3_256,
    secret,
    workerAddress,
    proof,
    network.networkType
  ).setMaxFee(100);

  const [ownerTransferTransaction, workerTransferTransaction]: Transaction[] = [ownerAddress, workerAddress].map(
    (address) => {
      return TransferTransaction.create(
        Deadline.create(network.epochAdjustment),
        address,
        [new Mosaic(new MosaicId(network.rtpMosaicId), getMosaicAmountUInt64(1, network.rtpMosaicDivisivility))],
        PlainMessage.create('Reward RTP'),
        network.networkType
      ).setMaxFee(100);
    }
  );

  const aggregateTransaction: AggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(network.epochAdjustment),
    [
      secretProofTransaction.toAggregate(systemAccount),
      ownerTransferTransaction.toAggregate(systemAccount),
      workerTransferTransaction.toAggregate(systemAccount),
    ],
    network.networkType,
    [],
    getCurrencyAmountUInt64(1)
  );

  return aggregateTransaction;
}

/**
 * symbol-sdk@v2 TransactionService 相当
 * Transaction のアナウンスとリアルタイムな Confirmed の検出、またはエラーの返却を行う
 */
export async function announce(
  plainAddress: string,
  signedPayload: string,
  signedTransactionHash: string,
  network: NetworkSymbol
): Promise<{ [key: string]: any }> {
  const _WebSocket = typeof window === 'undefined' ? WebSocket : window.WebSocket || WebSocket;

  return await new Promise(function (resolve, reject) {
    const ws = new _WebSocket(network.wsUrl);

    ws.onopen = () => {
      transactionRoutesApi.announceTransaction({ transactionPayload: { payload: signedPayload } }).catch(() => {
        ws.close();
        reject(new Error('Failed to announce transaction'));
      });
    };

    ws.onclose = () => {};
    ws.onmessage = (message: any) => {
      const res = JSON.parse(message.data);
      const statusFlag: string = `status/${plainAddress}`;
      const confirmedFlag: string = `confirmedAdded/${plainAddress}`;
      if ('uid' in res) {
        const body1: { [key: string]: string } = { uid: res.uid, subscribe: statusFlag };
        const body2: { [key: string]: string } = { uid: res.uid, subscribe: confirmedFlag };
        ws.send(JSON.stringify(body1));
        ws.send(JSON.stringify(body2));
      } else {
        if (res.topic === statusFlag) {
          if (res.data.hash === signedTransactionHash) {
            ws.close();
            reject(new Error(res.data.code));
          }
        } else if (res.topic === confirmedFlag) {
          if (res.data.meta.hash === signedTransactionHash) {
            ws.close();
            resolve(res);
          }
        }
      }
    };
  });
}

/**
 * システムアカウントによってトランザクションへ署名、アナウンスする
 */
export async function announceBySystemAccount(
  transaction: Transaction,
  network: NetworkSymbol
): Promise<{ [key: string]: any }> {
  const systemAccount = Account.createFromPrivateKey(systemPrivateKey, network.networkType);
  const signedTransaction: SignedTransaction = systemAccount.sign(transaction, network.generationHashSeed);
  return await announce(systemAccount.address.plain(), signedTransaction.payload, signedTransaction.hash, network);
}
