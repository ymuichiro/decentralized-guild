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
 * Metadata type:
 * * 0 - Account.
 * * 1 - Mosaic.
 * * 2 - Namespace.
 * @export
 */
export declare const MetadataTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
};
export type MetadataTypeEnum = (typeof MetadataTypeEnum)[keyof typeof MetadataTypeEnum];
export declare function MetadataTypeEnumFromJSON(json: any): MetadataTypeEnum;
export declare function MetadataTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataTypeEnum;
export declare function MetadataTypeEnumToJSON(value?: MetadataTypeEnum | null): any;
