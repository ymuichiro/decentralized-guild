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
 * Type of action:
 * * 0 - Unlink.
 * * 1 - Link.
 * @export
 */
export var LinkActionEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
};
export function LinkActionEnumFromJSON(json) {
    return LinkActionEnumFromJSONTyped(json, false);
}
export function LinkActionEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function LinkActionEnumToJSON(value) {
    return value;
}
