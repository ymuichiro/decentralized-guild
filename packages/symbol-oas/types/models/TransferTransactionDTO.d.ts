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
import type { UnresolvedMosaic } from './UnresolvedMosaic';
/**
 * Transaction to transfer mosaics and a message to another account.
 * @export
 * @interface TransferTransactionDTO
 */
export interface TransferTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof TransferTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof TransferTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof TransferTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof TransferTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof TransferTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof TransferTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof TransferTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof TransferTransactionDTO
     */
    deadline: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof TransferTransactionDTO
     */
    recipientAddress: string;
    /**
     * Array of mosaics sent to the recipient.
     * @type {Array<UnresolvedMosaic>}
     * @memberof TransferTransactionDTO
     */
    mosaics?: Array<UnresolvedMosaic>;
    /**
     * Transfer transaction message
     * @type {string}
     * @memberof TransferTransactionDTO
     */
    message?: string;
}
/**
 * Check if a given object implements the TransferTransactionDTO interface.
 */
export declare function instanceOfTransferTransactionDTO(value: object): boolean;
export declare function TransferTransactionDTOFromJSON(json: any): TransferTransactionDTO;
export declare function TransferTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTransactionDTO;
export declare function TransferTransactionDTOToJSON(value?: TransferTransactionDTO | null): any;
