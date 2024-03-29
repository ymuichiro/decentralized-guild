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
import { LockStatusFromJSON, LockStatusToJSON } from './LockStatus';
/**
 * Check if a given object implements the HashLockEntryDTO interface.
 */
export function instanceOfHashLockEntryDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'ownerAddress' in value;
    isInstance = isInstance && 'mosaicId' in value;
    isInstance = isInstance && 'amount' in value;
    isInstance = isInstance && 'endHeight' in value;
    isInstance = isInstance && 'status' in value;
    isInstance = isInstance && 'hash' in value;
    return isInstance;
}
export function HashLockEntryDTOFromJSON(json) {
    return HashLockEntryDTOFromJSONTyped(json, false);
}
export function HashLockEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: json['version'],
        ownerAddress: json['ownerAddress'],
        mosaicId: json['mosaicId'],
        amount: json['amount'],
        endHeight: json['endHeight'],
        status: LockStatusFromJSON(json['status']),
        hash: json['hash'],
    };
}
export function HashLockEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        ownerAddress: value.ownerAddress,
        mosaicId: value.mosaicId,
        amount: value.amount,
        endHeight: value.endHeight,
        status: LockStatusToJSON(value.status),
        hash: value.hash,
    };
}
