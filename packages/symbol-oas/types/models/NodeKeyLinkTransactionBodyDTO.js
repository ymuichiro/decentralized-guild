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
/**
 * Check if a given object implements the NodeKeyLinkTransactionBodyDTO interface.
 */
export function instanceOfNodeKeyLinkTransactionBodyDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'linkedPublicKey' in value;
    isInstance = isInstance && 'linkAction' in value;
    return isInstance;
}
export function NodeKeyLinkTransactionBodyDTOFromJSON(json) {
    return NodeKeyLinkTransactionBodyDTOFromJSONTyped(json, false);
}
export function NodeKeyLinkTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        linkedPublicKey: json['linkedPublicKey'],
        linkAction: LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function NodeKeyLinkTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        linkedPublicKey: value.linkedPublicKey,
        linkAction: LinkActionEnumToJSON(value.linkAction),
    };
}
