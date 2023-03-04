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
export declare const NodeStatusEnum: {
    readonly Up: "up";
    readonly Down: "down";
};
export type NodeStatusEnum = (typeof NodeStatusEnum)[keyof typeof NodeStatusEnum];
export declare function NodeStatusEnumFromJSON(json: any): NodeStatusEnum;
export declare function NodeStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeStatusEnum;
export declare function NodeStatusEnumToJSON(value?: NodeStatusEnum | null): any;