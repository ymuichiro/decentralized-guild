/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import {
    AccountRestrictionFlagsEnumFromJSON,
    AccountRestrictionFlagsEnumFromJSONTyped,
    AccountRestrictionFlagsEnumToJSON,
} from './AccountRestrictionFlagsEnum';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
import {
    TransactionTypeEnumFromJSON,
    TransactionTypeEnumFromJSONTyped,
    TransactionTypeEnumToJSON,
} from './TransactionTypeEnum';

/**
 * 
 * @export
 * @interface AccountOperationRestrictionTransactionBodyDTO
 */
export interface AccountOperationRestrictionTransactionBodyDTO {
    /**
     * 
     * @type {AccountRestrictionFlagsEnum}
     * @memberof AccountOperationRestrictionTransactionBodyDTO
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof AccountOperationRestrictionTransactionBodyDTO
     */
    restrictionAdditions?: Array<TransactionTypeEnum>;
    /**
     * Account restriction deletions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof AccountOperationRestrictionTransactionBodyDTO
     */
    restrictionDeletions?: Array<TransactionTypeEnum>;
}

/**
 * Check if a given object implements the AccountOperationRestrictionTransactionBodyDTO interface.
 */
export function instanceOfAccountOperationRestrictionTransactionBodyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "restrictionFlags" in value;

    return isInstance;
}

export function AccountOperationRestrictionTransactionBodyDTOFromJSON(json: any): AccountOperationRestrictionTransactionBodyDTO {
    return AccountOperationRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}

export function AccountOperationRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOperationRestrictionTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': !exists(json, 'restrictionAdditions') ? undefined : ((json['restrictionAdditions'] as Array<any>).map(TransactionTypeEnumFromJSON)),
        'restrictionDeletions': !exists(json, 'restrictionDeletions') ? undefined : ((json['restrictionDeletions'] as Array<any>).map(TransactionTypeEnumFromJSON)),
    };
}

export function AccountOperationRestrictionTransactionBodyDTOToJSON(value?: AccountOperationRestrictionTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions === undefined ? undefined : ((value.restrictionAdditions as Array<any>).map(TransactionTypeEnumToJSON)),
        'restrictionDeletions': value.restrictionDeletions === undefined ? undefined : ((value.restrictionDeletions as Array<any>).map(TransactionTypeEnumToJSON)),
    };
}
