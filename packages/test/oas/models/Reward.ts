/* tslint:disable */
/* eslint-disable */
/**
 * Decentralized-Guild
 * About Decentralized Guild System APIs. Please use it when expanding the system.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: ym.u.ichiro@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChainTypeEnum } from './ChainTypeEnum';
import {
    ChainTypeEnumFromJSON,
    ChainTypeEnumFromJSONTyped,
    ChainTypeEnumToJSON,
} from './ChainTypeEnum';

/**
 * 
 * @export
 * @interface Reward
 */
export interface Reward {
    /**
     * 
     * @type {ChainTypeEnum}
     * @memberof Reward
     */
    chain: ChainTypeEnum;
    /**
     * xym = mosaicId, eth = contract address
     * @type {string}
     * @memberof Reward
     */
    currencyId: string;
    /**
     * 
     * @type {number}
     * @memberof Reward
     */
    amount: number;
}

/**
 * Check if a given object implements the Reward interface.
 */
export function instanceOfReward(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "currencyId" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function RewardFromJSON(json: any): Reward {
    return RewardFromJSONTyped(json, false);
}

export function RewardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reward {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': ChainTypeEnumFromJSON(json['chain']),
        'currencyId': json['currencyId'],
        'amount': json['amount'],
    };
}

export function RewardToJSON(value?: Reward | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': ChainTypeEnumToJSON(value.chain),
        'currencyId': value.currencyId,
        'amount': value.amount,
    };
}

