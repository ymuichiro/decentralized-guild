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
 * Check if a given object implements the NamespaceNameDTO interface.
 */
export function instanceOfNamespaceNameDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'name' in value;
    return isInstance;
}
export function NamespaceNameDTOFromJSON(json) {
    return NamespaceNameDTOFromJSONTyped(json, false);
}
export function NamespaceNameDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        parentId: !exists(json, 'parentId') ? undefined : json['parentId'],
        id: json['id'],
        name: json['name'],
    };
}
export function NamespaceNameDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        parentId: value.parentId,
        id: value.id,
        name: value.name,
    };
}
