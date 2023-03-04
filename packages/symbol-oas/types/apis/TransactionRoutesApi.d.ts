/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { AnnounceTransactionInfoDTO, Cosignature, Order, TransactionIds, TransactionInfoDTO, TransactionPage, TransactionPayload, TransactionTypeEnum } from '../models';
export interface AnnounceCosignatureTransactionRequest {
    cosignature: Cosignature;
}
export interface AnnouncePartialTransactionRequest {
    transactionPayload: TransactionPayload;
}
export interface AnnounceTransactionRequest {
    transactionPayload: TransactionPayload;
}
export interface GetConfirmedTransactionRequest {
    transactionId: string;
}
export interface GetConfirmedTransactionsRequest {
    transactionIds: TransactionIds;
}
export interface GetPartialTransactionRequest {
    transactionId: string;
}
export interface GetPartialTransactionsRequest {
    transactionIds: TransactionIds;
}
export interface GetUnconfirmedTransactionRequest {
    transactionId: string;
}
export interface GetUnconfirmedTransactionsRequest {
    transactionIds: TransactionIds;
}
export interface SearchConfirmedTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchPartialTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchUnconfirmedTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
/**
 *
 */
export declare class TransactionRoutesApi extends runtime.BaseAPI {
    /**
     * Announces a cosignature transaction to the network.
     * Announce a cosignature transaction
     */
    announceCosignatureTransactionRaw(requestParameters: AnnounceCosignatureTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>>;
    /**
     * Announces a cosignature transaction to the network.
     * Announce a cosignature transaction
     */
    announceCosignatureTransaction(requestParameters: AnnounceCosignatureTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnounceTransactionInfoDTO>;
    /**
     * Announces an aggregate bonded transaction to the network.
     * Announce an aggregate bonded transaction
     */
    announcePartialTransactionRaw(requestParameters: AnnouncePartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>>;
    /**
     * Announces an aggregate bonded transaction to the network.
     * Announce an aggregate bonded transaction
     */
    announcePartialTransaction(requestParameters: AnnouncePartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnounceTransactionInfoDTO>;
    /**
     * Announces a transaction to the network. The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities. Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).  It\'s recommended to use SDKs instead of calling the API endpoint directly to announce transactions.
     * Announce a new transaction
     */
    announceTransactionRaw(requestParameters: AnnounceTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>>;
    /**
     * Announces a transaction to the network. The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities. Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).  It\'s recommended to use SDKs instead of calling the API endpoint directly to announce transactions.
     * Announce a new transaction
     */
    announceTransaction(requestParameters: AnnounceTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnounceTransactionInfoDTO>;
    /**
     * Returns confirmed transaction information given a transactionId or hash.
     * Get confirmed transaction information
     */
    getConfirmedTransactionRaw(requestParameters: GetConfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInfoDTO>>;
    /**
     * Returns confirmed transaction information given a transactionId or hash.
     * Get confirmed transaction information
     */
    getConfirmedTransaction(requestParameters: GetConfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInfoDTO>;
    /**
     * Returns confirmed transactions information for a given array of transactionIds.
     * Get confirmed trasactions information
     */
    getConfirmedTransactionsRaw(requestParameters: GetConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>>;
    /**
     * Returns confirmed transactions information for a given array of transactionIds.
     * Get confirmed trasactions information
     */
    getConfirmedTransactions(requestParameters: GetConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionInfoDTO>>;
    /**
     * Returns partial transaction information given a transactionId or hash.
     * Get partial transaction information
     */
    getPartialTransactionRaw(requestParameters: GetPartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInfoDTO>>;
    /**
     * Returns partial transaction information given a transactionId or hash.
     * Get partial transaction information
     */
    getPartialTransaction(requestParameters: GetPartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInfoDTO>;
    /**
     * Returns partial transactions information for a given array of transactionIds.
     * Get partial trasactions information
     */
    getPartialTransactionsRaw(requestParameters: GetPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>>;
    /**
     * Returns partial transactions information for a given array of transactionIds.
     * Get partial trasactions information
     */
    getPartialTransactions(requestParameters: GetPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionInfoDTO>>;
    /**
     * Returns unconfirmed transaction information given a transactionId or hash.
     * Get unconfirmed transaction information
     */
    getUnconfirmedTransactionRaw(requestParameters: GetUnconfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInfoDTO>>;
    /**
     * Returns unconfirmed transaction information given a transactionId or hash.
     * Get unconfirmed transaction information
     */
    getUnconfirmedTransaction(requestParameters: GetUnconfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInfoDTO>;
    /**
     * Returns unconfirmed transactions information for a given array of transactionIds.
     * Get unconfirmed trasactions information
     */
    getUnconfirmedTransactionsRaw(requestParameters: GetUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>>;
    /**
     * Returns unconfirmed transactions information for a given array of transactionIds.
     * Get unconfirmed trasactions information
     */
    getUnconfirmedTransactions(requestParameters: GetUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionInfoDTO>>;
    /**
     * Returns an array of confirmed transactions. If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that was resolved from the alias at confirmation time.
     * Search confirmed transactions
     */
    searchConfirmedTransactionsRaw(requestParameters: SearchConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPage>>;
    /**
     * Returns an array of confirmed transactions. If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that was resolved from the alias at confirmation time.
     * Search confirmed transactions
     */
    searchConfirmedTransactions(requestParameters?: SearchConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPage>;
    /**
     * Returns an array of partial transactions.
     * Search partial transactions
     */
    searchPartialTransactionsRaw(requestParameters: SearchPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPage>>;
    /**
     * Returns an array of partial transactions.
     * Search partial transactions
     */
    searchPartialTransactions(requestParameters?: SearchPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPage>;
    /**
     * Returns an array of unconfirmed transactions.
     * Search unconfirmed transactions
     */
    searchUnconfirmedTransactionsRaw(requestParameters: SearchUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPage>>;
    /**
     * Returns an array of unconfirmed transactions.
     * Search unconfirmed transactions
     */
    searchUnconfirmedTransactions(requestParameters?: SearchUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPage>;
}