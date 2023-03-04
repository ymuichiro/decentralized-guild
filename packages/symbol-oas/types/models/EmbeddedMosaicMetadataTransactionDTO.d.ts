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
 * @interface EmbeddedMosaicMetadataTransactionDTO
 */
export interface EmbeddedMosaicMetadataTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    scopedMetadataKey: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    targetMosaicId: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof EmbeddedMosaicMetadataTransactionDTO
     */
    value: string;
}
/**
 * Check if a given object implements the EmbeddedMosaicMetadataTransactionDTO interface.
 */
export declare function instanceOfEmbeddedMosaicMetadataTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicMetadataTransactionDTOFromJSON(json: any): EmbeddedMosaicMetadataTransactionDTO;
export declare function EmbeddedMosaicMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicMetadataTransactionDTO;
export declare function EmbeddedMosaicMetadataTransactionDTOToJSON(value?: EmbeddedMosaicMetadataTransactionDTO | null): any;