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
import type { TransactionTypeEnum } from './TransactionTypeEnum';
/**
 * Transaction to prevent outgoing transactions by transaction type.
 * @export
 * @interface AccountOperationRestrictionTransactionDTO
 */
export interface AccountOperationRestrictionTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    deadline: string;
    /**
     *
     * @type {AccountRestrictionFlagsEnum}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    restrictionAdditions?: Array<TransactionTypeEnum>;
    /**
     * Account restriction deletions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof AccountOperationRestrictionTransactionDTO
     */
    restrictionDeletions?: Array<TransactionTypeEnum>;
}
/**
 * Check if a given object implements the AccountOperationRestrictionTransactionDTO interface.
 */
export declare function instanceOfAccountOperationRestrictionTransactionDTO(value: object): boolean;
export declare function AccountOperationRestrictionTransactionDTOFromJSON(json: any): AccountOperationRestrictionTransactionDTO;
export declare function AccountOperationRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOperationRestrictionTransactionDTO;
export declare function AccountOperationRestrictionTransactionDTOToJSON(value?: AccountOperationRestrictionTransactionDTO | null): any;
