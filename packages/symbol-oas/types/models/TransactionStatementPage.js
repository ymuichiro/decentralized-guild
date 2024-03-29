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
import { PaginationFromJSON, PaginationToJSON } from './Pagination';
import { TransactionStatementInfoDTOFromJSON, TransactionStatementInfoDTOToJSON, } from './TransactionStatementInfoDTO';
/**
 * Check if a given object implements the TransactionStatementPage interface.
 */
export function instanceOfTransactionStatementPage(value) {
    var isInstance = true;
    isInstance = isInstance && 'data' in value;
    isInstance = isInstance && 'pagination' in value;
    return isInstance;
}
export function TransactionStatementPageFromJSON(json) {
    return TransactionStatementPageFromJSONTyped(json, false);
}
export function TransactionStatementPageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json['data'].map(TransactionStatementInfoDTOFromJSON),
        pagination: PaginationFromJSON(json['pagination']),
    };
}
export function TransactionStatementPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(TransactionStatementInfoDTOToJSON),
        pagination: PaginationToJSON(value.pagination),
    };
}
