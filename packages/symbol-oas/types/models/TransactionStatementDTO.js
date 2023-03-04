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
import { SourceDTOFromJSON, SourceDTOToJSON } from './SourceDTO';
import { TransactionStatementDTOReceiptsInnerFromJSON, TransactionStatementDTOReceiptsInnerToJSON, } from './TransactionStatementDTOReceiptsInner';
/**
 * Check if a given object implements the TransactionStatementDTO interface.
 */
export function instanceOfTransactionStatementDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'height' in value;
    isInstance = isInstance && 'source' in value;
    isInstance = isInstance && 'receipts' in value;
    return isInstance;
}
export function TransactionStatementDTOFromJSON(json) {
    return TransactionStatementDTOFromJSONTyped(json, false);
}
export function TransactionStatementDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        height: json['height'],
        source: SourceDTOFromJSON(json['source']),
        receipts: json['receipts'].map(TransactionStatementDTOReceiptsInnerFromJSON),
    };
}
export function TransactionStatementDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        height: value.height,
        source: SourceDTOToJSON(value.source),
        receipts: value.receipts.map(TransactionStatementDTOReceiptsInnerToJSON),
    };
}
