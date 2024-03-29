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
import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
/**
 * Transaction to prevent incoming and outgoing transactions for a given a set of addresses.
 * @export
 * @interface AccountAddressRestrictionTransactionDTO
 */
export interface AccountAddressRestrictionTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    deadline: string;
    /**
     *
     * @type {AccountRestrictionFlagsEnum}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<string>}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    restrictionAdditions?: Array<string>;
    /**
     * Account restriction deletions.
     * @type {Array<string>}
     * @memberof AccountAddressRestrictionTransactionDTO
     */
    restrictionDeletions?: Array<string>;
}
/**
 * Check if a given object implements the AccountAddressRestrictionTransactionDTO interface.
 */
export declare function instanceOfAccountAddressRestrictionTransactionDTO(value: object): boolean;
export declare function AccountAddressRestrictionTransactionDTOFromJSON(json: any): AccountAddressRestrictionTransactionDTO;
export declare function AccountAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAddressRestrictionTransactionDTO;
export declare function AccountAddressRestrictionTransactionDTOToJSON(value?: AccountAddressRestrictionTransactionDTO | null): any;
