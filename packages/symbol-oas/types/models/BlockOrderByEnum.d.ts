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
 *
 * @export
 */
export declare const BlockOrderByEnum: {
    readonly Id: "id";
    readonly Height: "height";
};
export type BlockOrderByEnum = (typeof BlockOrderByEnum)[keyof typeof BlockOrderByEnum];
export declare function BlockOrderByEnumFromJSON(json: any): BlockOrderByEnum;
export declare function BlockOrderByEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOrderByEnum;
export declare function BlockOrderByEnumToJSON(value?: BlockOrderByEnum | null): any;
