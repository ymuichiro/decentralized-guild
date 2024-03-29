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
 *
 * @export
 * @interface EmbeddedAccountOperationRestrictionTransactionDTO
 */
export interface EmbeddedAccountOperationRestrictionTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    type: number;
    /**
     *
     * @type {AccountRestrictionFlagsEnum}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    restrictionAdditions?: Array<TransactionTypeEnum>;
    /**
     * Account restriction deletions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof EmbeddedAccountOperationRestrictionTransactionDTO
     */
    restrictionDeletions?: Array<TransactionTypeEnum>;
}
/**
 * Check if a given object implements the EmbeddedAccountOperationRestrictionTransactionDTO interface.
 */
export declare function instanceOfEmbeddedAccountOperationRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountOperationRestrictionTransactionDTOFromJSON(json: any): EmbeddedAccountOperationRestrictionTransactionDTO;
export declare function EmbeddedAccountOperationRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountOperationRestrictionTransactionDTO;
export declare function EmbeddedAccountOperationRestrictionTransactionDTOToJSON(value?: EmbeddedAccountOperationRestrictionTransactionDTO | null): any;
