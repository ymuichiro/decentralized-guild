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
 * Check if a given object implements the TransactionPayload interface.
 */
export function instanceOfTransactionPayload(value) {
    var isInstance = true;
    return isInstance;
}
export function TransactionPayloadFromJSON(json) {
    return TransactionPayloadFromJSONTyped(json, false);
}
export function TransactionPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        payload: !exists(json, 'payload') ? undefined : json['payload'],
    };
}
export function TransactionPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        payload: value.payload,
    };
}
