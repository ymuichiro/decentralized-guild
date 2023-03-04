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
export declare const MosaicSupplyChangeActionEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type MosaicSupplyChangeActionEnum = (typeof MosaicSupplyChangeActionEnum)[keyof typeof MosaicSupplyChangeActionEnum];
export declare function MosaicSupplyChangeActionEnumFromJSON(json: any): MosaicSupplyChangeActionEnum;
export declare function MosaicSupplyChangeActionEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyChangeActionEnum;
export declare function MosaicSupplyChangeActionEnumToJSON(value?: MosaicSupplyChangeActionEnum | null): any;