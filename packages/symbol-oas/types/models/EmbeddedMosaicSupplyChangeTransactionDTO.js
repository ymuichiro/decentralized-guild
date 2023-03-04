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
import { MosaicSupplyChangeActionEnumFromJSON, MosaicSupplyChangeActionEnumToJSON, } from './MosaicSupplyChangeActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON } from './NetworkTypeEnum';
/**
 * Check if a given object implements the EmbeddedMosaicSupplyChangeTransactionDTO interface.
 */
export function instanceOfEmbeddedMosaicSupplyChangeTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'mosaicId' in value;
    isInstance = isInstance && 'delta' in value;
    isInstance = isInstance && 'action' in value;
    return isInstance;
}
export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSON(json) {
    return EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        mosaicId: json['mosaicId'],
        delta: json['delta'],
        action: MosaicSupplyChangeActionEnumFromJSON(json['action']),
    };
}
export function EmbeddedMosaicSupplyChangeTransactionDTOToJSON(value) {
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
        delta: value.delta,
        action: MosaicSupplyChangeActionEnumToJSON(value.action),
    };
}