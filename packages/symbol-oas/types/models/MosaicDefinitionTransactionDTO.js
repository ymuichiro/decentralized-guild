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
 * Check if a given object implements the MosaicDefinitionTransactionDTO interface.
 */
export function instanceOfMosaicDefinitionTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'size' in value;
    isInstance = isInstance && 'signature' in value;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'maxFee' in value;
    isInstance = isInstance && 'deadline' in value;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'duration' in value;
    isInstance = isInstance && 'nonce' in value;
    isInstance = isInstance && 'flags' in value;
    isInstance = isInstance && 'divisibility' in value;
    return isInstance;
}
export function MosaicDefinitionTransactionDTOFromJSON(json) {
    return MosaicDefinitionTransactionDTOFromJSONTyped(json, false);
}
export function MosaicDefinitionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        size: json['size'],
        signature: json['signature'],
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        maxFee: json['maxFee'],
        deadline: json['deadline'],
        id: json['id'],
        duration: json['duration'],
        nonce: json['nonce'],
        flags: json['flags'],
        divisibility: json['divisibility'],
    };
}
export function MosaicDefinitionTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        size: value.size,
        signature: value.signature,
        signerPublicKey: value.signerPublicKey,
        version: value.version,
        network: NetworkTypeEnumToJSON(value.network),
        type: value.type,
        maxFee: value.maxFee,
        deadline: value.deadline,
        id: value.id,
        duration: value.duration,
        nonce: value.nonce,
        flags: value.flags,
        divisibility: value.divisibility,
    };
}
