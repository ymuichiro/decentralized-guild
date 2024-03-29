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
 * @interface VrfKeyLinkNetworkPropertiesDTO
 */
export interface VrfKeyLinkNetworkPropertiesDTO {
    /**
     * to trigger plugin load
     * @type {string}
     * @memberof VrfKeyLinkNetworkPropertiesDTO
     */
    dummy?: string;
}
/**
 * Check if a given object implements the VrfKeyLinkNetworkPropertiesDTO interface.
 */
export declare function instanceOfVrfKeyLinkNetworkPropertiesDTO(value: object): boolean;
export declare function VrfKeyLinkNetworkPropertiesDTOFromJSON(json: any): VrfKeyLinkNetworkPropertiesDTO;
export declare function VrfKeyLinkNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrfKeyLinkNetworkPropertiesDTO;
export declare function VrfKeyLinkNetworkPropertiesDTOToJSON(value?: VrfKeyLinkNetworkPropertiesDTO | null): any;
