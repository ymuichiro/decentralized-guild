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
import type { MosaicGlobalRestrictionEntryRestrictionDTO } from './MosaicGlobalRestrictionEntryRestrictionDTO';
/**
 *
 * @export
 * @interface MosaicGlobalRestrictionEntryDTO
 */
export interface MosaicGlobalRestrictionEntryDTO {
    /**
     * Restriction key.
     * @type {string}
     * @memberof MosaicGlobalRestrictionEntryDTO
     */
    key: string;
    /**
     *
     * @type {MosaicGlobalRestrictionEntryRestrictionDTO}
     * @memberof MosaicGlobalRestrictionEntryDTO
     */
    restriction: MosaicGlobalRestrictionEntryRestrictionDTO;
}
/**
 * Check if a given object implements the MosaicGlobalRestrictionEntryDTO interface.
 */
export declare function instanceOfMosaicGlobalRestrictionEntryDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionEntryDTOFromJSON(json: any): MosaicGlobalRestrictionEntryDTO;
export declare function MosaicGlobalRestrictionEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionEntryDTO;
export declare function MosaicGlobalRestrictionEntryDTOToJSON(value?: MosaicGlobalRestrictionEntryDTO | null): any;
