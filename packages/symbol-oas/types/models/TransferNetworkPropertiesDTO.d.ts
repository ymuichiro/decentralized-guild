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
 * @interface TransferNetworkPropertiesDTO
 */
export interface TransferNetworkPropertiesDTO {
    /**
     * Maximum transaction message size.
     * @type {string}
     * @memberof TransferNetworkPropertiesDTO
     */
    maxMessageSize?: string;
}
/**
 * Check if a given object implements the TransferNetworkPropertiesDTO interface.
 */
export declare function instanceOfTransferNetworkPropertiesDTO(value: object): boolean;
export declare function TransferNetworkPropertiesDTOFromJSON(json: any): TransferNetworkPropertiesDTO;
export declare function TransferNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferNetworkPropertiesDTO;
export declare function TransferNetworkPropertiesDTOToJSON(value?: TransferNetworkPropertiesDTO | null): any;
