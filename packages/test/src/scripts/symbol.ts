import { filter, firstValueFrom, merge, tap } from 'rxjs';
import { RepositoryFactoryHttp } from 'symbol-sdk/dist/src/infrastructure/RepositoryFactoryHttp';
import { Account } from 'symbol-sdk/dist/src/model/account/Account';
import { Address } from 'symbol-sdk/dist/src/model/account/Address';
import { NetworkType } from 'symbol-sdk/dist/src/model/network/NetworkType';
import { AggregateTransaction } from 'symbol-sdk/dist/src/model/transaction/AggregateTransaction';
import { SignedTransaction } from 'symbol-sdk/dist/src/model/transaction/SignedTransaction';
import { TransactionService } from 'symbol-sdk/dist/src/service/TransactionService';

export async function signToAggregateTransaction(serializedTransaction: string, privateKey: string): Promise<string> {
  const transaction = AggregateTransaction.createFromPayload(serializedTransaction);

  const account = Account.createFromPrivateKey(privateKey, NetworkType.TEST_NET);
  const signedTransaction: SignedTransaction = account.sign(
    transaction,
    '49D6E1CE276A85B70EAFE52349AACCA389302E7A9754BCF1221E79494FC665A4'
  );

  await announce(account.address, signedTransaction);
  return signedTransaction.hash;
}

async function announce(address: Address, transaction: SignedTransaction) {
  const repositoryFactory = new RepositoryFactoryHttp('https://mikun-testnet.tk:3001');
  const receiptHttp = repositoryFactory.createReceiptRepository();
  const transactionHttp = repositoryFactory.createTransactionRepository();
  const listener = repositoryFactory.createListener();
  const transactionService = new TransactionService(transactionHttp, receiptHttp);

  return listener.open().then(async () => {
    try {
      console.log('... アナウンス待機中');
      const tx = await firstValueFrom(
        merge(
          transactionService.announce(transaction, listener),
          listener.status(address).pipe(
            filter((error) => error.hash === transaction.hash),
            tap((error) => {
              throw new Error(error.code);
            })
          )
        )
      );
      console.log('announce successful', transaction.hash);

      listener.close();
    } catch (err) {
      console.error(err);
    }
  });
}
