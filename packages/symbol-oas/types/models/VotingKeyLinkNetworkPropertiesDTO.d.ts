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
 * @interface VotingKeyLinkNetworkPropertiesDTO
 */
export interface VotingKeyLinkNetworkPropertiesDTO {
    /**
     * to trigger plugin load
     * @type {string}
     * @memberof VotingKeyLinkNetworkPropertiesDTO
     */
    dummy?: string;
}
/**
 * Check if a given object implements the VotingKeyLinkNetworkPropertiesDTO interface.
 */
export declare function instanceOfVotingKeyLinkNetworkPropertiesDTO(value: object): boolean;
export declare function VotingKeyLinkNetworkPropertiesDTOFromJSON(json: any): VotingKeyLinkNetworkPropertiesDTO;
export declare function VotingKeyLinkNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VotingKeyLinkNetworkPropertiesDTO;
export declare function VotingKeyLinkNetworkPropertiesDTOToJSON(value?: VotingKeyLinkNetworkPropertiesDTO | null): any;
