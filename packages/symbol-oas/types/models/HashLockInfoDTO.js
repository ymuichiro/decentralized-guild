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
import { HashLockEntryDTOFromJSON, HashLockEntryDTOToJSON } from './HashLockEntryDTO';
/**
 * Check if a given object implements the HashLockInfoDTO interface.
 */
export function instanceOfHashLockInfoDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'lock' in value;
    return isInstance;
}
export function HashLockInfoDTOFromJSON(json) {
    return HashLockInfoDTOFromJSONTyped(json, false);
}
export function HashLockInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        lock: HashLockEntryDTOFromJSON(json['lock']),
    };
}
export function HashLockInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        lock: HashLockEntryDTOToJSON(value.lock),
    };
}
