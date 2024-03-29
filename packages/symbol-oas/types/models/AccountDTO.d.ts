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
import type { AccountTypeEnum } from './AccountTypeEnum';
import type { ActivityBucketDTO } from './ActivityBucketDTO';
import type { Mosaic } from './Mosaic';
import type { SupplementalPublicKeysDTO } from './SupplementalPublicKeysDTO';
/**
 *
 * @export
 * @interface AccountDTO
 */
export interface AccountDTO {
    /**
     * The version of the state
     * @type {number}
     * @memberof AccountDTO
     */
    version: number;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AccountDTO
     */
    address: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof AccountDTO
     */
    addressHeight: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AccountDTO
     */
    publicKey: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof AccountDTO
     */
    publicKeyHeight: string;
    /**
     *
     * @type {AccountTypeEnum}
     * @memberof AccountDTO
     */
    accountType: AccountTypeEnum;
    /**
     *
     * @type {SupplementalPublicKeysDTO}
     * @memberof AccountDTO
     */
    supplementalPublicKeys: SupplementalPublicKeysDTO;
    /**
     *
     * @type {Array<ActivityBucketDTO>}
     * @memberof AccountDTO
     */
    activityBuckets: Array<ActivityBucketDTO>;
    /**
     * Mosaic units owned.
     * @type {Array<Mosaic>}
     * @memberof AccountDTO
     */
    mosaics: Array<Mosaic>;
    /**
     * Probability of an account to harvest the next block.
     * @type {string}
     * @memberof AccountDTO
     */
    importance: string;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof AccountDTO
     */
    importanceHeight: string;
}
/**
 * Check if a given object implements the AccountDTO interface.
 */
export declare function instanceOfAccountDTO(value: object): boolean;
export declare function AccountDTOFromJSON(json: any): AccountDTO;
export declare function AccountDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDTO;
export declare function AccountDTOToJSON(value?: AccountDTO | null): any;
