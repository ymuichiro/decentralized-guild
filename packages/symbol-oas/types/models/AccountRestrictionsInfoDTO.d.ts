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
import type { AccountRestrictionsDTO } from './AccountRestrictionsDTO';
/**
 *
 * @export
 * @interface AccountRestrictionsInfoDTO
 */
export interface AccountRestrictionsInfoDTO {
    /**
     *
     * @type {AccountRestrictionsDTO}
     * @memberof AccountRestrictionsInfoDTO
     */
    accountRestrictions: AccountRestrictionsDTO;
}
/**
 * Check if a given object implements the AccountRestrictionsInfoDTO interface.
 */
export declare function instanceOfAccountRestrictionsInfoDTO(value: object): boolean;
export declare function AccountRestrictionsInfoDTOFromJSON(json: any): AccountRestrictionsInfoDTO;
export declare function AccountRestrictionsInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionsInfoDTO;
export declare function AccountRestrictionsInfoDTOToJSON(value?: AccountRestrictionsInfoDTO | null): any;
