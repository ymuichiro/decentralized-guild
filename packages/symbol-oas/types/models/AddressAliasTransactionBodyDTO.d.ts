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
import type { AliasActionEnum } from './AliasActionEnum';
/**
 *
 * @export
 * @interface AddressAliasTransactionBodyDTO
 */
export interface AddressAliasTransactionBodyDTO {
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof AddressAliasTransactionBodyDTO
     */
    namespaceId: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AddressAliasTransactionBodyDTO
     */
    address: string;
    /**
     *
     * @type {AliasActionEnum}
     * @memberof AddressAliasTransactionBodyDTO
     */
    aliasAction: AliasActionEnum;
}
/**
 * Check if a given object implements the AddressAliasTransactionBodyDTO interface.
 */
export declare function instanceOfAddressAliasTransactionBodyDTO(value: object): boolean;
export declare function AddressAliasTransactionBodyDTOFromJSON(json: any): AddressAliasTransactionBodyDTO;
export declare function AddressAliasTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressAliasTransactionBodyDTO;
export declare function AddressAliasTransactionBodyDTOToJSON(value?: AddressAliasTransactionBodyDTO | null): any;
