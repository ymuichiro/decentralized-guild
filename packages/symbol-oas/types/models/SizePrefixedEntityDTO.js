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
/**
 * Check if a given object implements the SizePrefixedEntityDTO interface.
 */
export function instanceOfSizePrefixedEntityDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'size' in value;
    return isInstance;
}
export function SizePrefixedEntityDTOFromJSON(json) {
    return SizePrefixedEntityDTOFromJSONTyped(json, false);
}
export function SizePrefixedEntityDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        size: json['size'],
    };
}
export function SizePrefixedEntityDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        size: value.size,
    };
}
