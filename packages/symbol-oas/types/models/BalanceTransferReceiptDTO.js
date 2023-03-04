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
 * Check if a given object implements the BalanceTransferReceiptDTO interface.
 */
export function instanceOfBalanceTransferReceiptDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'mosaicId' in value;
    isInstance = isInstance && 'amount' in value;
    isInstance = isInstance && 'senderAddress' in value;
    isInstance = isInstance && 'recipientAddress' in value;
    return isInstance;
}
export function BalanceTransferReceiptDTOFromJSON(json) {
    return BalanceTransferReceiptDTOFromJSONTyped(json, false);
}
export function BalanceTransferReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
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
    };
}
export function BalanceTransferReceiptDTOToJSON(value) {
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
    };
}