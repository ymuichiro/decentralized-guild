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
 * Possible status of lock states:
 * * 0 - UNUSED.
 * * 1 - USED.
 * @export
 */
export var LockStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
};
export function LockStatusFromJSON(json) {
    return LockStatusFromJSONTyped(json, false);
}
export function LockStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function LockStatusToJSON(value) {
    return value;
}