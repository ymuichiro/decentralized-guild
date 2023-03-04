import { announce } from '@/services/ContractSymbol';
import { accountRoutesApi } from '@/services/InitOas';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import { requestSign, requestSignEncription, setMessage, setTransactionByPayload } from 'sss-module/dist';
import { AccountDTO } from 'symbol-oas/types';
import { Account } from 'symbol-sdk/dist/src/model/account';
import { EncryptedMessage } from 'symbol-sdk/dist/src/model/message';
import { NetworkType } from 'symbol-sdk/dist/src/model/network';
import { SignedTransaction } from 'symbol-sdk/dist/src/model/transaction';
import AccountBase from './AccountBase';

export class AccountUser extends AccountBase {
  public constructor(publicKey: string, networkType: NetworkType) {
    super(publicKey, networkType);
  }

  public createEncryptedMessageBySSS(recipientAccount: AccountBase): Promise<EncryptedMessage> {
    setMessage(this.privateMessage, recipientAccount.account.publicKey);
    return requestSignEncription();
  }

  public createEncryptedMessage(fromAccount: Account, recipientAccount: AccountBase): EncryptedMessage {
    return fromAccount.encryptMessage(this.privateMessage, recipientAccount.account);
  }

  public async getAccountInfo(): Promise<AccountDTO> {
    const { account } = await accountRoutesApi.getAccountInfo({ accountId: this.account.address.plain() });
    return account;
  }

  static generateNewAccount(networkType: NetworkType): Account {
    return Account.generateNewAccount(networkType);
  }

  public async signToTransactionBySSS(serializedTransaction: string): Promise<SignedTransaction> {
    setTransactionByPayload(serializedTransaction);
    const signedTransaction: SignedTransaction = await requestSign();
    const address: string = this.account.address.plain();
    const network = new NetworkSymbol();

    try {
      await announce(address, signedTransaction.payload, signedTransaction.hash, network);
    } catch (err) {
      throw err;
    }

    return signedTransaction;
  }
}
