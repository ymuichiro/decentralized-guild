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
 * Check if a given object implements the AccountNamesDTO interface.
 */
export function instanceOfAccountNamesDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'address' in value;
    isInstance = isInstance && 'names' in value;
    return isInstance;
}
export function AccountNamesDTOFromJSON(json) {
    return AccountNamesDTOFromJSONTyped(json, false);
}
export function AccountNamesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        address: json['address'],
        names: json['names'],
    };
}
export function AccountNamesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        address: value.address,
        names: value.names,
    };
}