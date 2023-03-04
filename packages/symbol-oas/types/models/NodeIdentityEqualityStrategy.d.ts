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
 * Node equality strategy. Defines if the identifier for the node must be its public key or host.
 * @export
 */
export declare const NodeIdentityEqualityStrategy: {
    readonly Host: "host";
    readonly PublicKey: "public-key";
};
export type NodeIdentityEqualityStrategy = (typeof NodeIdentityEqualityStrategy)[keyof typeof NodeIdentityEqualityStrategy];
export declare function NodeIdentityEqualityStrategyFromJSON(json: any): NodeIdentityEqualityStrategy;
export declare function NodeIdentityEqualityStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeIdentityEqualityStrategy;
export declare function NodeIdentityEqualityStrategyToJSON(value?: NodeIdentityEqualityStrategy | null): any;
