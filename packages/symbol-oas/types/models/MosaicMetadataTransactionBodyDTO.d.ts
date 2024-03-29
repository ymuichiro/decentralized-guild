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
/**
 *
 * @export
 * @interface MosaicMetadataTransactionBodyDTO
 */
export interface MosaicMetadataTransactionBodyDTO {
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof MosaicMetadataTransactionBodyDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof MosaicMetadataTransactionBodyDTO
     */
    scopedMetadataKey: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicMetadataTransactionBodyDTO
     */
    targetMosaicId: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof MosaicMetadataTransactionBodyDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicMetadataTransactionBodyDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof MosaicMetadataTransactionBodyDTO
     */
    value: string;
}
/**
 * Check if a given object implements the MosaicMetadataTransactionBodyDTO interface.
 */
export declare function instanceOfMosaicMetadataTransactionBodyDTO(value: object): boolean;
export declare function MosaicMetadataTransactionBodyDTOFromJSON(json: any): MosaicMetadataTransactionBodyDTO;
export declare function MosaicMetadataTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicMetadataTransactionBodyDTO;
export declare function MosaicMetadataTransactionBodyDTOToJSON(value?: MosaicMetadataTransactionBodyDTO | null): any;
