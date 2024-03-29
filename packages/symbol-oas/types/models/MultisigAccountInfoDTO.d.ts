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
import type { MultisigDTO } from './MultisigDTO';
/**
 *
 * @export
 * @interface MultisigAccountInfoDTO
 */
export interface MultisigAccountInfoDTO {
    /**
     *
     * @type {MultisigDTO}
     * @memberof MultisigAccountInfoDTO
     */
    multisig: MultisigDTO;
}
/**
 * Check if a given object implements the MultisigAccountInfoDTO interface.
 */
export declare function instanceOfMultisigAccountInfoDTO(value: object): boolean;
export declare function MultisigAccountInfoDTOFromJSON(json: any): MultisigAccountInfoDTO;
export declare function MultisigAccountInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigAccountInfoDTO;
export declare function MultisigAccountInfoDTOToJSON(value?: MultisigAccountInfoDTO | null): any;
