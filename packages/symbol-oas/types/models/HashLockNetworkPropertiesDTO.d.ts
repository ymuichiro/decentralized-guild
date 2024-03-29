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
 * @interface HashLockNetworkPropertiesDTO
 */
export interface HashLockNetworkPropertiesDTO {
    /**
     * Amount that has to be locked per aggregate in partial cache.
     * @type {string}
     * @memberof HashLockNetworkPropertiesDTO
     */
    lockedFundsPerAggregate?: string;
    /**
     * Maximum number of blocks for which a hash lock can exist.
     * @type {string}
     * @memberof HashLockNetworkPropertiesDTO
     */
    maxHashLockDuration?: string;
}
/**
 * Check if a given object implements the HashLockNetworkPropertiesDTO interface.
 */
export declare function instanceOfHashLockNetworkPropertiesDTO(value: object): boolean;
export declare function HashLockNetworkPropertiesDTOFromJSON(json: any): HashLockNetworkPropertiesDTO;
export declare function HashLockNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockNetworkPropertiesDTO;
export declare function HashLockNetworkPropertiesDTOToJSON(value?: HashLockNetworkPropertiesDTO | null): any;
