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
import type { EmbeddedTransactionInfoDTO } from './EmbeddedTransactionInfoDTO';
/**
 *
 * @export
 * @interface EmbeddedTransactionBodyDTO
 */
export interface EmbeddedTransactionBodyDTO {
    /**
     * Array of transactions initiated by different accounts.
     * @type {Array<EmbeddedTransactionInfoDTO>}
     * @memberof EmbeddedTransactionBodyDTO
     */
    transactions: Array<EmbeddedTransactionInfoDTO>;
}
/**
 * Check if a given object implements the EmbeddedTransactionBodyDTO interface.
 */
export declare function instanceOfEmbeddedTransactionBodyDTO(value: object): boolean;
export declare function EmbeddedTransactionBodyDTOFromJSON(json: any): EmbeddedTransactionBodyDTO;
export declare function EmbeddedTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionBodyDTO;
export declare function EmbeddedTransactionBodyDTOToJSON(value?: EmbeddedTransactionBodyDTO | null): any;
