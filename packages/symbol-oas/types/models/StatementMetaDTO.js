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
 * Check if a given object implements the StatementMetaDTO interface.
 */
export function instanceOfStatementMetaDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'timestamp' in value;
    return isInstance;
}
export function StatementMetaDTOFromJSON(json) {
    return StatementMetaDTOFromJSONTyped(json, false);
}
export function StatementMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        timestamp: json['timestamp'],
    };
}
export function StatementMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        timestamp: value.timestamp,
    };
}
