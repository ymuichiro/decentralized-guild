import { NetworkType } from 'symbol-sdk/dist/src/model/network';

const networkType =
  Number(process.env.NEXT_PUBLIC_SYMBOL_NETWORKTYPE) === 104 ? NetworkType.MAIN_NET : NetworkType.TEST_NET;

export class NetworkSymbol {
  public readonly nodeUrl: string;
  public readonly wsUrl: string;
  public readonly networkType: NetworkType;
  public readonly generationHashSeed: string;
  public readonly epochAdjustment: number;
  public readonly currencyMosaicId: string;
  public readonly currencyDivisivility: number;
  public readonly rtpMosaicId: string;
  public readonly rtpMosaicDivisivility: number;

  public constructor() {
    this.nodeUrl = process.env.NEXT_PUBLIC_SYMBOL_NODE;
    this.wsUrl = process.env.NEXT_PUBLIC_SYMBOL_NODE_WS;
    this.networkType = networkType;
    this.generationHashSeed = process.env.NEXT_PUBLIC_SYMBOL_GENERATION_HASH_SEED;
    this.epochAdjustment = Number(process.env.NEXT_PUBLIC_SYMBOL_EPOCH_ADJUSTMENT);
    this.currencyMosaicId = process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_MOSAIC_ID;
    this.currencyDivisivility = Number(process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_DIVISIVILITY);
    this.rtpMosaicId = process.env.NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_ID;
    this.rtpMosaicDivisivility = Number(process.env.NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_DIVISIVILITY);
  }
}
