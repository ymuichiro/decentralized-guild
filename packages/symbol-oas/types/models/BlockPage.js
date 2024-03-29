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
import { BlockInfoDTOFromJSON, BlockInfoDTOToJSON } from './BlockInfoDTO';
import { PaginationFromJSON, PaginationToJSON } from './Pagination';
/**
 * Check if a given object implements the BlockPage interface.
 */
export function instanceOfBlockPage(value) {
    var isInstance = true;
    isInstance = isInstance && 'data' in value;
    isInstance = isInstance && 'pagination' in value;
    return isInstance;
}
export function BlockPageFromJSON(json) {
    return BlockPageFromJSONTyped(json, false);
}
export function BlockPageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json['data'].map(BlockInfoDTOFromJSON),
        pagination: PaginationFromJSON(json['pagination']),
    };
}
export function BlockPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(BlockInfoDTOToJSON),
        pagination: PaginationToJSON(value.pagination),
    };
}
