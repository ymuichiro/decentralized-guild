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
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON } from './NetworkTypeEnum';
/**
 * Check if a given object implements the EmbeddedMosaicAddressRestrictionTransactionDTO interface.
 */
export function instanceOfEmbeddedMosaicAddressRestrictionTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'mosaicId' in value;
    isInstance = isInstance && 'restrictionKey' in value;
    isInstance = isInstance && 'previousRestrictionValue' in value;
    isInstance = isInstance && 'newRestrictionValue' in value;
    isInstance = isInstance && 'targetAddress' in value;
    return isInstance;
}
export function EmbeddedMosaicAddressRestrictionTransactionDTOFromJSON(json) {
    return EmbeddedMosaicAddressRestrictionTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicAddressRestrictionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        mosaicId: json['mosaicId'],
        restrictionKey: json['restrictionKey'],
        previousRestrictionValue: json['previousRestrictionValue'],
        newRestrictionValue: json['newRestrictionValue'],
        targetAddress: json['targetAddress'],
    };
}
export function EmbeddedMosaicAddressRestrictionTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signerPublicKey: value.signerPublicKey,
        version: value.version,
        network: NetworkTypeEnumToJSON(value.network),
        type: value.type,
        mosaicId: value.mosaicId,
        restrictionKey: value.restrictionKey,
        previousRestrictionValue: value.previousRestrictionValue,
        newRestrictionValue: value.newRestrictionValue,
        targetAddress: value.targetAddress,
    };
}