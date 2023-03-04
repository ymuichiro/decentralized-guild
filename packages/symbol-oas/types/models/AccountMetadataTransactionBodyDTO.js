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
/**
 * Check if a given object implements the AccountMetadataTransactionBodyDTO interface.
 */
export function instanceOfAccountMetadataTransactionBodyDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'targetAddress' in value;
    isInstance = isInstance && 'scopedMetadataKey' in value;
    isInstance = isInstance && 'valueSizeDelta' in value;
    isInstance = isInstance && 'valueSize' in value;
    isInstance = isInstance && 'value' in value;
    return isInstance;
}
export function AccountMetadataTransactionBodyDTOFromJSON(json) {
    return AccountMetadataTransactionBodyDTOFromJSONTyped(json, false);
}
export function AccountMetadataTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        targetAddress: json['targetAddress'],
        scopedMetadataKey: json['scopedMetadataKey'],
        valueSizeDelta: json['valueSizeDelta'],
        valueSize: json['valueSize'],
        value: json['value'],
    };
}
export function AccountMetadataTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        targetAddress: value.targetAddress,
        scopedMetadataKey: value.scopedMetadataKey,
        valueSizeDelta: value.valueSizeDelta,
        valueSize: value.valueSize,
        value: value.value,
    };
}
