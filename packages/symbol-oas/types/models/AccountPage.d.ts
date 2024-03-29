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
import type { AccountInfoDTO } from './AccountInfoDTO';
import type { Pagination } from './Pagination';
/**
 *
 * @export
 * @interface AccountPage
 */
export interface AccountPage {
    /**
     * Array of accounts.
     * @type {Array<AccountInfoDTO>}
     * @memberof AccountPage
     */
    data: Array<AccountInfoDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof AccountPage
     */
    pagination: Pagination;
}
/**
 * Check if a given object implements the AccountPage interface.
 */
export declare function instanceOfAccountPage(value: object): boolean;
export declare function AccountPageFromJSON(json: any): AccountPage;
export declare function AccountPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPage;
export declare function AccountPageToJSON(value?: AccountPage | null): any;
