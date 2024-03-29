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
 * Check if a given object implements the UnlockedAccountDTO interface.
 */
export function instanceOfUnlockedAccountDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'unlockedAccount' in value;
    return isInstance;
}
export function UnlockedAccountDTOFromJSON(json) {
    return UnlockedAccountDTOFromJSONTyped(json, false);
}
export function UnlockedAccountDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        unlockedAccount: json['unlockedAccount'],
    };
}
export function UnlockedAccountDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        unlockedAccount: value.unlockedAccount,
    };
}
