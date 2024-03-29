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
 * Direction of the supply change:
 * * 0  - Decrease.
 * * 1  - Increase.
 * @export
 */
export var MosaicSupplyChangeActionEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
};
export function MosaicSupplyChangeActionEnumFromJSON(json) {
    return MosaicSupplyChangeActionEnumFromJSONTyped(json, false);
}
export function MosaicSupplyChangeActionEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function MosaicSupplyChangeActionEnumToJSON(value) {
    return value;
}
