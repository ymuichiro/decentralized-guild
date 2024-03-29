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
 * @interface TransactionPayload
 */
export interface TransactionPayload {
    /**
     * Transaction payload in hexadecimal format.
     * @type {string}
     * @memberof TransactionPayload
     */
    payload?: string;
}
/**
 * Check if a given object implements the TransactionPayload interface.
 */
export declare function instanceOfTransactionPayload(value: object): boolean;
export declare function TransactionPayloadFromJSON(json: any): TransactionPayload;
export declare function TransactionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPayload;
export declare function TransactionPayloadToJSON(value?: TransactionPayload | null): any;
