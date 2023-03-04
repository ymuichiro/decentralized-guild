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
 * Check if a given object implements the EmbeddedMosaicMetadataTransactionDTO interface.
 */
export function instanceOfEmbeddedMosaicMetadataTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'targetAddress' in value;
    isInstance = isInstance && 'scopedMetadataKey' in value;
    isInstance = isInstance && 'targetMosaicId' in value;
    isInstance = isInstance && 'valueSizeDelta' in value;
    isInstance = isInstance && 'valueSize' in value;
    isInstance = isInstance && 'value' in value;
    return isInstance;
}
export function EmbeddedMosaicMetadataTransactionDTOFromJSON(json) {
    return EmbeddedMosaicMetadataTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicMetadataTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        targetAddress: json['targetAddress'],
        scopedMetadataKey: json['scopedMetadataKey'],
        targetMosaicId: json['targetMosaicId'],
        valueSizeDelta: json['valueSizeDelta'],
        valueSize: json['valueSize'],
        value: json['value'],
    };
}
export function EmbeddedMosaicMetadataTransactionDTOToJSON(value) {
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
        targetAddress: value.targetAddress,
        scopedMetadataKey: value.scopedMetadataKey,
        targetMosaicId: value.targetMosaicId,
        valueSizeDelta: value.valueSizeDelta,
        valueSize: value.valueSize,
        value: value.value,
    };
}
