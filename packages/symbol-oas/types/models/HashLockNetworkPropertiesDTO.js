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
import { exists } from '../runtime';
/**
 * Check if a given object implements the HashLockNetworkPropertiesDTO interface.
 */
export function instanceOfHashLockNetworkPropertiesDTO(value) {
    var isInstance = true;
    return isInstance;
}
export function HashLockNetworkPropertiesDTOFromJSON(json) {
    return HashLockNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function HashLockNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        lockedFundsPerAggregate: !exists(json, 'lockedFundsPerAggregate') ? undefined : json['lockedFundsPerAggregate'],
        maxHashLockDuration: !exists(json, 'maxHashLockDuration') ? undefined : json['maxHashLockDuration'],
    };
}
export function HashLockNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        lockedFundsPerAggregate: value.lockedFundsPerAggregate,
        maxHashLockDuration: value.maxHashLockDuration,
    };
}
