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
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON } from './NetworkTypeEnum';
import { UnresolvedMosaicFromJSON, UnresolvedMosaicToJSON } from './UnresolvedMosaic';
/**
 * Check if a given object implements the EmbeddedTransferTransactionDTO interface.
 */
export function instanceOfEmbeddedTransferTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'recipientAddress' in value;
    return isInstance;
}
export function EmbeddedTransferTransactionDTOFromJSON(json) {
    return EmbeddedTransferTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedTransferTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        recipientAddress: json['recipientAddress'],
        mosaics: !exists(json, 'mosaics') ? undefined : json['mosaics'].map(UnresolvedMosaicFromJSON),
        message: !exists(json, 'message') ? undefined : json['message'],
    };
}
export function EmbeddedTransferTransactionDTOToJSON(value) {
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
        recipientAddress: value.recipientAddress,
        mosaics: value.mosaics === undefined ? undefined : value.mosaics.map(UnresolvedMosaicToJSON),
        message: value.message,
    };
}
