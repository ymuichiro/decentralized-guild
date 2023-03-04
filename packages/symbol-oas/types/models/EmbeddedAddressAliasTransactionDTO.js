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
import { AliasActionEnumFromJSON, AliasActionEnumToJSON } from './AliasActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON } from './NetworkTypeEnum';
/**
 * Check if a given object implements the EmbeddedAddressAliasTransactionDTO interface.
 */
export function instanceOfEmbeddedAddressAliasTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'namespaceId' in value;
    isInstance = isInstance && 'address' in value;
    isInstance = isInstance && 'aliasAction' in value;
    return isInstance;
}
export function EmbeddedAddressAliasTransactionDTOFromJSON(json) {
    return EmbeddedAddressAliasTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedAddressAliasTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        namespaceId: json['namespaceId'],
        address: json['address'],
        aliasAction: AliasActionEnumFromJSON(json['aliasAction']),
    };
}
export function EmbeddedAddressAliasTransactionDTOToJSON(value) {
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
        namespaceId: value.namespaceId,
        address: value.address,
        aliasAction: AliasActionEnumToJSON(value.aliasAction),
    };
}