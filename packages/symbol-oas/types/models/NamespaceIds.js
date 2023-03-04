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
 * Check if a given object implements the NamespaceIds interface.
 */
export function instanceOfNamespaceIds(value) {
    var isInstance = true;
    return isInstance;
}
export function NamespaceIdsFromJSON(json) {
    return NamespaceIdsFromJSONTyped(json, false);
}
export function NamespaceIdsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        namespaceIds: !exists(json, 'namespaceIds') ? undefined : json['namespaceIds'],
    };
}
export function NamespaceIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        namespaceIds: value.namespaceIds,
    };
}
