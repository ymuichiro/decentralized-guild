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
import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON } from './ReceiptTypeEnum';
/**
 * Check if a given object implements the TransactionStatementDTOReceiptsInner interface.
 */
export function instanceOfTransactionStatementDTOReceiptsInner(value) {
    var isInstance = true;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'mosaicId' in value;
    isInstance = isInstance && 'amount' in value;
    isInstance = isInstance && 'senderAddress' in value;
    isInstance = isInstance && 'recipientAddress' in value;
    isInstance = isInstance && 'targetAddress' in value;
    isInstance = isInstance && 'artifactId' in value;
    return isInstance;
}
export function TransactionStatementDTOReceiptsInnerFromJSON(json) {
    return TransactionStatementDTOReceiptsInnerFromJSONTyped(json, false);
}
export function TransactionStatementDTOReceiptsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: json['version'],
        type: ReceiptTypeEnumFromJSON(json['type']),
        mosaicId: json['mosaicId'],
        amount: json['amount'],
        senderAddress: json['senderAddress'],
        recipientAddress: json['recipientAddress'],
        targetAddress: json['targetAddress'],
        artifactId: json['artifactId'],
    };
}
export function TransactionStatementDTOReceiptsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        type: ReceiptTypeEnumToJSON(value.type),
        mosaicId: value.mosaicId,
        amount: value.amount,
        senderAddress: value.senderAddress,
        recipientAddress: value.recipientAddress,
        targetAddress: value.targetAddress,
        artifactId: value.artifactId,
    };
}
