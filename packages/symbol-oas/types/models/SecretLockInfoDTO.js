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
import { SecretLockEntryDTOFromJSON, SecretLockEntryDTOToJSON, } from './SecretLockEntryDTO';
/**
 * Check if a given object implements the SecretLockInfoDTO interface.
 */
export function instanceOfSecretLockInfoDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'lock' in value;
    return isInstance;
}
export function SecretLockInfoDTOFromJSON(json) {
    return SecretLockInfoDTOFromJSONTyped(json, false);
}
export function SecretLockInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        lock: SecretLockEntryDTOFromJSON(json['lock']),
    };
}
export function SecretLockInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        lock: SecretLockEntryDTOToJSON(value.lock),
    };
}
