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
import type { SecretLockEntryDTO } from './SecretLockEntryDTO';
/**
 *
 * @export
 * @interface SecretLockInfoDTO
 */
export interface SecretLockInfoDTO {
    /**
     *
     * @type {string}
     * @memberof SecretLockInfoDTO
     */
    id: string;
    /**
     *
     * @type {SecretLockEntryDTO}
     * @memberof SecretLockInfoDTO
     */
    lock: SecretLockEntryDTO;
}
/**
 * Check if a given object implements the SecretLockInfoDTO interface.
 */
export declare function instanceOfSecretLockInfoDTO(value: object): boolean;
export declare function SecretLockInfoDTOFromJSON(json: any): SecretLockInfoDTO;
export declare function SecretLockInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockInfoDTO;
export declare function SecretLockInfoDTOToJSON(value?: SecretLockInfoDTO | null): any;
