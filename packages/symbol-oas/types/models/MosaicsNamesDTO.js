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
import { MosaicNamesDTOFromJSON, MosaicNamesDTOToJSON } from './MosaicNamesDTO';
/**
 * Check if a given object implements the MosaicsNamesDTO interface.
 */
export function instanceOfMosaicsNamesDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'mosaicNames' in value;
    return isInstance;
}
export function MosaicsNamesDTOFromJSON(json) {
    return MosaicsNamesDTOFromJSONTyped(json, false);
}
export function MosaicsNamesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        mosaicNames: json['mosaicNames'].map(MosaicNamesDTOFromJSON),
    };
}
export function MosaicsNamesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        mosaicNames: value.mosaicNames.map(MosaicNamesDTOToJSON),
    };
}
