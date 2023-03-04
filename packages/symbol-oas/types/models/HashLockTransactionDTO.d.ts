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
import type { NetworkTypeEnum } from './NetworkTypeEnum';
/**
 * Transaction to lock funds before sending an aggregate bonded transaction.
 * @export
 * @interface HashLockTransactionDTO
 */
export interface HashLockTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof HashLockTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof HashLockTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof HashLockTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof HashLockTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    deadline: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    amount: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    duration: string;
    /**
     *
     * @type {string}
     * @memberof HashLockTransactionDTO
     */
    hash: string;
}
/**
 * Check if a given object implements the HashLockTransactionDTO interface.
 */
export declare function instanceOfHashLockTransactionDTO(value: object): boolean;
export declare function HashLockTransactionDTOFromJSON(json: any): HashLockTransactionDTO;
export declare function HashLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockTransactionDTO;
export declare function HashLockTransactionDTOToJSON(value?: HashLockTransactionDTO | null): any;
