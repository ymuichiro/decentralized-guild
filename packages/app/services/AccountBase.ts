import { Address, PublicAccount } from 'symbol-sdk/dist/src/model/account';
import { NetworkType } from 'symbol-sdk/dist/src/model/network';
import { Mosaic } from 'symbol-oas/types/models';
import { NetworkSymbol } from './NetworkSymbol';
import { mosaicRoutesApi } from '@/services/InitOas';

interface MosaicInfo {
  id: string;
  amount: number;
  divisivility: number;
  mosaicOwnerAddress?: Address;
}

export default class AccountBase {
  public readonly account: PublicAccount;
  public readonly networkType: NetworkType;
  protected readonly privateMessage: string; // サーバー、フロントエンド間での暗号化通信のためのメッセージ

  protected constructor(publicKey: string, networkType: NetworkType) {
    this.privateMessage = 'this is a private message!';
    this.account = PublicAccount.createFromPublicKey(publicKey, networkType);
    this.networkType = networkType;
  }

  public getCurrentAccountCurrencyBalance(mosaics: Mosaic[]): MosaicInfo | undefined {
    const network: NetworkSymbol = new NetworkSymbol();
    const currencyMosaic: Mosaic | undefined = mosaics.find((mosaic) => mosaic.id === network.currencyMosaicId);
    if (!currencyMosaic) return undefined;
    const rowAmount = Number(currencyMosaic.amount);
    return {
      id: currencyMosaic.id,
      amount: rowAmount === 0 ? 0 : rowAmount / Math.pow(10, network.currencyDivisivility),
      divisivility: network.currencyDivisivility,
      mosaicOwnerAddress: undefined,
    };
  }

  public async getAccountMosaicsBalance(mosaics: Mosaic[]): Promise<MosaicInfo[]> {
    const network: NetworkSymbol = new NetworkSymbol();
    const _mosaics: Mosaic[] = mosaics.filter((mosaic) => mosaic.id !== network.currencyMosaicId);
    const parsedMosaics: MosaicInfo[] = [];
    for (const mosaic of _mosaics) {
      const { mosaic: _mosaic } = await mosaicRoutesApi.getMosaic({ mosaicId: mosaic.id });
      const rowAmount: number = Number(mosaic.amount);
      parsedMosaics.push({
        id: _mosaic.id,
        amount: rowAmount === 0 ? 0 : rowAmount / Math.pow(10, _mosaic.divisibility),
        divisivility: _mosaic.divisibility,
        mosaicOwnerAddress: Address.createFromEncoded(_mosaic.ownerAddress),
      });
    }
    return parsedMosaics;
  }

  static isCorrectPublicKey(publicKey: string): boolean {
    if (publicKey.length > 79 || publicKey.length < 19) return false;
    try {
      Address.createFromPublicKey(publicKey, NetworkType.MAIN_NET); // ネットワークタイプは考慮不要
    } catch {
      return false;
    }
    return true;
  }
}
