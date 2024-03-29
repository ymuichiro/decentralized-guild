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
 * @interface AccountNamesDTO
 */
export interface AccountNamesDTO {
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AccountNamesDTO
     */
    address: string;
    /**
     * Account linked namespace names.
     * @type {Array<string>}
     * @memberof AccountNamesDTO
     */
    names: Array<string>;
}
/**
 * Check if a given object implements the AccountNamesDTO interface.
 */
export declare function instanceOfAccountNamesDTO(value: object): boolean;
export declare function AccountNamesDTOFromJSON(json: any): AccountNamesDTO;
export declare function AccountNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountNamesDTO;
export declare function AccountNamesDTOToJSON(value?: AccountNamesDTO | null): any;
