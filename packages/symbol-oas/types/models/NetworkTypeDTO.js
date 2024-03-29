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
 * Check if a given object implements the NetworkTypeDTO interface.
 */
export function instanceOfNetworkTypeDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'name' in value;
    isInstance = isInstance && 'description' in value;
    return isInstance;
}
export function NetworkTypeDTOFromJSON(json) {
    return NetworkTypeDTOFromJSONTyped(json, false);
}
export function NetworkTypeDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json['name'],
        description: json['description'],
    };
}
export function NetworkTypeDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        description: value.description,
    };
}
