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
import type { MerkleStateInfoDTO, Order, SecretLockInfoDTO, SecretLockPage } from '../models';
export interface GetSecretLockRequest {
    compositeHash: string;
}
export interface GetSecretLockMerkleRequest {
    compositeHash: string;
}
export interface SearchSecretLockRequest {
    address?: string;
    secret?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
/**
 *
 */
export declare class SecretLockRoutesApi extends runtime.BaseAPI {
    /**
     * Gets the hash lock for a given composite hash.
     * Get secret lock information
     */
    getSecretLockRaw(requestParameters: GetSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SecretLockInfoDTO>>;
    /**
     * Gets the hash lock for a given composite hash.
     * Get secret lock information
     */
    getSecretLock(requestParameters: GetSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SecretLockInfoDTO>;
    /**
     * Gets the hash lock merkle for a given composite hash.
     * Get secret lock merkle information
     */
    getSecretLockMerkleRaw(requestParameters: GetSecretLockMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    /**
     * Gets the hash lock merkle for a given composite hash.
     * Get secret lock merkle information
     */
    getSecretLockMerkle(requestParameters: GetSecretLockMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    /**
     * Returns an array of secret locks.
     * Search secret lock entries
     */
    searchSecretLockRaw(requestParameters: SearchSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SecretLockPage>>;
    /**
     * Returns an array of secret locks.
     * Search secret lock entries
     */
    searchSecretLock(requestParameters?: SearchSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SecretLockPage>;
}
