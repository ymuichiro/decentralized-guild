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
 * Type of mosaic restriction.
 * * 0 - Uninitialized value indicating no restriction.
 * * 1 (EQ) - Allow if equal.
 * * 2 (NE) - Allow if not equal.
 * * 3 (LT) - Allow if less than.
 * * 4 (LE) - Allow if less than or equal.
 * * 5 (GT) - Allow if greater than.
 * * 6 (GE) - Allow if greater than or equal.
 * @export
 */
export var MosaicRestrictionTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
};
export function MosaicRestrictionTypeEnumFromJSON(json) {
    return MosaicRestrictionTypeEnumFromJSONTyped(json, false);
}
export function MosaicRestrictionTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function MosaicRestrictionTypeEnumToJSON(value) {
    return value;
}