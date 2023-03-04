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
import type { ChainTypeEnum } from './ChainTypeEnum';
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
export declare function instanceOfReward(value: object): boolean;
export declare function RewardFromJSON(json: any): Reward;
export declare function RewardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reward;
export declare function RewardToJSON(value?: Reward | null): any;