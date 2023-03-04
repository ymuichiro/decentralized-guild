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
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
import {
    TransactionTypeEnumFromJSON,
    TransactionTypeEnumFromJSONTyped,
    TransactionTypeEnumToJSON,
} from './TransactionTypeEnum';

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
export function instanceOfAccountOperationRestrictionTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "restrictionFlags" in value;

    return isInstance;
}

export function AccountOperationRestrictionTransactionDTOFromJSON(json: any): AccountOperationRestrictionTransactionDTO {
    return AccountOperationRestrictionTransactionDTOFromJSONTyped(json, false);
}

export function AccountOperationRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOperationRestrictionTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': !exists(json, 'restrictionAdditions') ? undefined : ((json['restrictionAdditions'] as Array<any>).map(TransactionTypeEnumFromJSON)),
        'restrictionDeletions': !exists(json, 'restrictionDeletions') ? undefined : ((json['restrictionDeletions'] as Array<any>).map(TransactionTypeEnumFromJSON)),
    };
}

export function AccountOperationRestrictionTransactionDTOToJSON(value?: AccountOperationRestrictionTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions === undefined ? undefined : ((value.restrictionAdditions as Array<any>).map(TransactionTypeEnumToJSON)),
        'restrictionDeletions': value.restrictionDeletions === undefined ? undefined : ((value.restrictionDeletions as Array<any>).map(TransactionTypeEnumToJSON)),
    };
}

