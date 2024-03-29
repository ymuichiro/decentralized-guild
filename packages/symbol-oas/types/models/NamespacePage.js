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
import { NamespaceInfoDTOFromJSON, NamespaceInfoDTOToJSON } from './NamespaceInfoDTO';
import { PaginationFromJSON, PaginationToJSON } from './Pagination';
/**
 * Check if a given object implements the NamespacePage interface.
 */
export function instanceOfNamespacePage(value) {
    var isInstance = true;
    isInstance = isInstance && 'data' in value;
    isInstance = isInstance && 'pagination' in value;
    return isInstance;
}
export function NamespacePageFromJSON(json) {
    return NamespacePageFromJSONTyped(json, false);
}
export function NamespacePageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json['data'].map(NamespaceInfoDTOFromJSON),
        pagination: PaginationFromJSON(json['pagination']),
    };
}
export function NamespacePageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(NamespaceInfoDTOToJSON),
        pagination: PaginationToJSON(value.pagination),
    };
}
