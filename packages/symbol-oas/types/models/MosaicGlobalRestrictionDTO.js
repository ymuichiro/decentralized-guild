/* tslint:disable */
/* eslint-disable */
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
import { MosaicGlobalRestrictionEntryWrapperDTOFromJSON, MosaicGlobalRestrictionEntryWrapperDTOToJSON, } from './MosaicGlobalRestrictionEntryWrapperDTO';
/**
 * Check if a given object implements the MosaicGlobalRestrictionDTO interface.
 */
export function instanceOfMosaicGlobalRestrictionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'mosaicRestrictionEntry' in value;
    return isInstance;
}
export function MosaicGlobalRestrictionDTOFromJSON(json) {
    return MosaicGlobalRestrictionDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json['mosaicRestrictionEntry']),
    };
}
export function MosaicGlobalRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTOToJSON(value.mosaicRestrictionEntry),
    };
}
