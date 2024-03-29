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
import { StatementMetaDTOFromJSON, StatementMetaDTOToJSON } from './StatementMetaDTO';
import { TransactionStatementDTOFromJSON, TransactionStatementDTOToJSON, } from './TransactionStatementDTO';
/**
 * Check if a given object implements the TransactionStatementInfoDTO interface.
 */
export function instanceOfTransactionStatementInfoDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'meta' in value;
    isInstance = isInstance && 'statement' in value;
    return isInstance;
}
export function TransactionStatementInfoDTOFromJSON(json) {
    return TransactionStatementInfoDTOFromJSONTyped(json, false);
}
export function TransactionStatementInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        meta: StatementMetaDTOFromJSON(json['meta']),
        statement: TransactionStatementDTOFromJSON(json['statement']),
    };
}
export function TransactionStatementInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        meta: StatementMetaDTOToJSON(value.meta),
        statement: TransactionStatementDTOToJSON(value.statement),
    };
}
