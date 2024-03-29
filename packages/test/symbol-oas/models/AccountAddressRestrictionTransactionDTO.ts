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
export function instanceOfAccountAddressRestrictionTransactionDTO(value: object): boolean {
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

export function AccountAddressRestrictionTransactionDTOFromJSON(json: any): AccountAddressRestrictionTransactionDTO {
    return AccountAddressRestrictionTransactionDTOFromJSONTyped(json, false);
}

export function AccountAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAddressRestrictionTransactionDTO {
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
        'restrictionAdditions': !exists(json, 'restrictionAdditions') ? undefined : json['restrictionAdditions'],
        'restrictionDeletions': !exists(json, 'restrictionDeletions') ? undefined : json['restrictionDeletions'],
    };
}

export function AccountAddressRestrictionTransactionDTOToJSON(value?: AccountAddressRestrictionTransactionDTO | null): any {
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
        'restrictionAdditions': value.restrictionAdditions,
        'restrictionDeletions': value.restrictionDeletions,
    };
}

