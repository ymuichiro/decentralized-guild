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
import type { MetadataEntryDTOTargetId } from './MetadataEntryDTOTargetId';
import type { MetadataTypeEnum } from './MetadataTypeEnum';
/**
 *
 * @export
 * @interface MetadataEntryDTO
 */
export interface MetadataEntryDTO {
    /**
     * The version of the state
     * @type {number}
     * @memberof MetadataEntryDTO
     */
    version: number;
    /**
     *
     * @type {string}
     * @memberof MetadataEntryDTO
     */
    compositeHash: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof MetadataEntryDTO
     */
    sourceAddress: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof MetadataEntryDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof MetadataEntryDTO
     */
    scopedMetadataKey: string;
    /**
     *
     * @type {MetadataEntryDTOTargetId}
     * @memberof MetadataEntryDTO
     */
    targetId?: MetadataEntryDTOTargetId;
    /**
     *
     * @type {MetadataTypeEnum}
     * @memberof MetadataEntryDTO
     */
    metadataType: MetadataTypeEnum;
    /**
     * Metadata value.
     * @type {string}
     * @memberof MetadataEntryDTO
     */
    value: string;
}
/**
 * Check if a given object implements the MetadataEntryDTO interface.
 */
export declare function instanceOfMetadataEntryDTO(value: object): boolean;
export declare function MetadataEntryDTOFromJSON(json: any): MetadataEntryDTO;
export declare function MetadataEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataEntryDTO;
export declare function MetadataEntryDTOToJSON(value?: MetadataEntryDTO | null): any;
