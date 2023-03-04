/*

 Symbol Transaction の形式を検証する

*/

import { NetworkSymbol } from '@/services/NetworkSymbol';
import type { AggregateTransactionExtendedDTO, EmbeddedSecretLockTransactionDTO } from 'symbol-oas/types';
import { MessageFactory } from 'symbol-sdk/dist/src/model/message/MessageFactory';
import { TransactionType } from 'symbol-sdk/dist/src/model/transaction/TransactionType';

export interface VerificationValues {
  secret: string;
  reward: number;
  rewardChain: string;
  ownerPublicKey: string;
  questId: string;
  questTitle: string;
  questDescription: string;
}

const systemFee: number = Number(process.env.NEXT_PUBLIC_SYSTEM_FEE);
if (systemFee.toString() === 'NaN') throw new Error('NEXT_PUBLIC_SYSTEM_FEE is not defined');

// 別途固定値を環境変数へ置き換えを
export function verifyContractTransaction(
  aggregateTx: AggregateTransactionExtendedDTO,
  values: VerificationValues
): boolean {
  const network = new NetworkSymbol();
  // Aggregate Tx の形式が正しいか検証する
  if (aggregateTx.network !== network.networkType) return false;
  if (aggregateTx.signerPublicKey !== values.ownerPublicKey) return false;

  const innerTransferTxs = aggregateTx.transactions.filter((e) => e.transaction.type === TransactionType.TRANSFER);
  const innerSecretTxs = aggregateTx.transactions.filter((e) => e.transaction.type === TransactionType.SECRET_LOCK);

  if (innerTransferTxs.length !== 2 || innerSecretTxs.length !== 1) return false;
  const innerSecretTx = innerSecretTxs[0].transaction as EmbeddedSecretLockTransactionDTO;

  // SecretLock の正常性検証
  if (innerSecretTx.secret.toLocaleUpperCase() !== values.secret.toLocaleUpperCase()) return false;
  // 環境変数別途置き換え
  if (innerSecretTx.mosaicId !== network.currencyMosaicId) return false;

  if (Number(innerSecretTx.amount) / Math.pow(10, network.currencyDivisivility) !== values.reward) return false;
  // Transfer かつ QuestApprovalFeeSystemMessage の検証
  for (const tx of innerTransferTxs) {
    const message = JSON.parse(MessageFactory.createMessageFromHex(tx.transaction.message).payload);
    if (message.type === 'QuestApprovalFeeSystemMessage') {
      if (message.data?.quest?.id !== values.questId) return false;
      if (message.data?.owner?.publicKey !== values.ownerPublicKey) return false;
      const fee = tx.transaction?.mosaics?.find((e) => e.id === network.currencyMosaicId);
      if (!fee) return false;
      if (Number(fee.amount) / Math.pow(10, network.currencyDivisivility) !== systemFee) return false;
    }
    if (message.type === 'QuestContractSystemMessage') {
      if (message.data?.quest.id !== values.questId) return false;
      if (message.data?.quest.title !== values.questTitle) return false;
      if (message.data?.quest.description !== values.questDescription) return false;
      if (message.data?.owner.publicKey !== values.ownerPublicKey) return false;
      if (message.data?.reward.amount !== values.reward) return false;
      if (message.data?.reward.chain !== values.rewardChain) return false;
    }
  }

  return true;
}
