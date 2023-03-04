import { Account } from 'symbol-sdk/dist/src/model/account';
import { EncryptedMessage } from 'symbol-sdk/dist/src/model/message';
import { NetworkType } from 'symbol-sdk/dist/src/model/network';
import AccountBase from './AccountBase';

const systemPublicKey = process.env.NEXT_PUBLIC_SYMBOL_SYSTEM_PUBLICKEY;

export class AccountSystem extends AccountBase {
  public constructor(networkType: NetworkType) {
    super(systemPublicKey, networkType);
  }

  /** only server side */
  public verifyEncryptedToken(payload: string, senderAccount: AccountBase): boolean {
    if (process.env.SYMBOL_ADMIN_PRIVATEKEY) {
      throw new Error('SYMBOL_ADMIN_PRIVATEKEY is not set');
    }

    const message = new EncryptedMessage(payload, this.account);
    const systemAccount = Account.createFromPrivateKey(process.env.SYMBOL_ADMIN_PRIVATEKEY, this.networkType);
    const decryptedMessage = systemAccount.decryptMessage(message, senderAccount.account);
    return decryptedMessage.payload === this.privateMessage;
  }
}
