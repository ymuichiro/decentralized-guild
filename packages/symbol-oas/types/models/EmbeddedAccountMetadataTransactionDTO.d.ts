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
 *
 * @export
 * @interface EmbeddedAccountMetadataTransactionDTO
 */
export interface EmbeddedAccountMetadataTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    scopedMetadataKey: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    value: string;
}
/**
 * Check if a given object implements the EmbeddedAccountMetadataTransactionDTO interface.
 */
export declare function instanceOfEmbeddedAccountMetadataTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountMetadataTransactionDTOFromJSON(json: any): EmbeddedAccountMetadataTransactionDTO;
export declare function EmbeddedAccountMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountMetadataTransactionDTO;
export declare function EmbeddedAccountMetadataTransactionDTOToJSON(value?: EmbeddedAccountMetadataTransactionDTO | null): any;
