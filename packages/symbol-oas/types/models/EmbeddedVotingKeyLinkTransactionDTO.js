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
import { LinkActionEnumFromJSON, LinkActionEnumToJSON } from './LinkActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON } from './NetworkTypeEnum';
/**
 * Check if a given object implements the EmbeddedVotingKeyLinkTransactionDTO interface.
 */
export function instanceOfEmbeddedVotingKeyLinkTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'linkedPublicKey' in value;
    isInstance = isInstance && 'startEpoch' in value;
    isInstance = isInstance && 'endEpoch' in value;
    isInstance = isInstance && 'linkAction' in value;
    return isInstance;
}
export function EmbeddedVotingKeyLinkTransactionDTOFromJSON(json) {
    return EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        linkedPublicKey: json['linkedPublicKey'],
        startEpoch: json['startEpoch'],
        endEpoch: json['endEpoch'],
        linkAction: LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function EmbeddedVotingKeyLinkTransactionDTOToJSON(value) {
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
        linkedPublicKey: value.linkedPublicKey,
        startEpoch: value.startEpoch,
        endEpoch: value.endEpoch,
        linkAction: LinkActionEnumToJSON(value.linkAction),
    };
}
