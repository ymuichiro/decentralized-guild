import { ChatApi, QuestApi, ResponseError, Configuration as SystemRestConfiguration, UserApi } from 'oas/types';
import {
  AccountRoutesApi,
  MosaicRoutesApi,
  NetworkRoutesApi,
  Configuration as SymbolRestConfiguration,
  TransactionRoutesApi,
} from 'symbol-oas/types';

const oasConfig = new SystemRestConfiguration();
export const userApi = new UserApi(oasConfig);
export const questApi = new QuestApi(oasConfig);
export const chatApi = new ChatApi(oasConfig);
export { ResponseError };

const basePath: string | undefined = process.env.NEXT_PUBLIC_SYMBOL_NODE;
const symbolOasConfig = new SymbolRestConfiguration({ basePath });
export const accountRoutesApi = new AccountRoutesApi(symbolOasConfig);
export const networkRoutesApi = new NetworkRoutesApi(symbolOasConfig);
export const mosaicRoutesApi = new MosaicRoutesApi(symbolOasConfig);
export const transactionRoutesApi = new TransactionRoutesApi(symbolOasConfig);
