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
import type { NetworkTypeEnum } from './NetworkTypeEnum';
/**
 *
 * @export
 * @interface EmbeddedAddressAliasTransactionDTO
 */
export interface EmbeddedAddressAliasTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    type: number;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    namespaceId: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    address: string;
    /**
     *
     * @type {AliasActionEnum}
     * @memberof EmbeddedAddressAliasTransactionDTO
     */
    aliasAction: AliasActionEnum;
}
/**
 * Check if a given object implements the EmbeddedAddressAliasTransactionDTO interface.
 */
export declare function instanceOfEmbeddedAddressAliasTransactionDTO(value: object): boolean;
export declare function EmbeddedAddressAliasTransactionDTOFromJSON(json: any): EmbeddedAddressAliasTransactionDTO;
export declare function EmbeddedAddressAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAddressAliasTransactionDTO;
export declare function EmbeddedAddressAliasTransactionDTOToJSON(value?: EmbeddedAddressAliasTransactionDTO | null): any;
