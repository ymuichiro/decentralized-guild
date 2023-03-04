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
 * Check if a given object implements the NodeInfoDTO interface.
 */
export function instanceOfNodeInfoDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'publicKey' in value;
    isInstance = isInstance && 'networkGenerationHashSeed' in value;
    isInstance = isInstance && 'roles' in value;
    isInstance = isInstance && 'port' in value;
    isInstance = isInstance && 'networkIdentifier' in value;
    isInstance = isInstance && 'friendlyName' in value;
    isInstance = isInstance && 'host' in value;
    return isInstance;
}
export function NodeInfoDTOFromJSON(json) {
    return NodeInfoDTOFromJSONTyped(json, false);
}
export function NodeInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: json['version'],
        publicKey: json['publicKey'],
        networkGenerationHashSeed: json['networkGenerationHashSeed'],
        roles: json['roles'],
        port: json['port'],
        networkIdentifier: json['networkIdentifier'],
        friendlyName: json['friendlyName'],
        host: json['host'],
        nodePublicKey: !exists(json, 'nodePublicKey') ? undefined : json['nodePublicKey'],
    };
}
export function NodeInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        publicKey: value.publicKey,
        networkGenerationHashSeed: value.networkGenerationHashSeed,
        roles: value.roles,
        port: value.port,
        networkIdentifier: value.networkIdentifier,
        friendlyName: value.friendlyName,
        host: value.host,
        nodePublicKey: value.nodePublicKey,
    };
}