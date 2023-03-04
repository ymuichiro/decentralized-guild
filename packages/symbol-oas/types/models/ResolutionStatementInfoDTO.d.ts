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
import type { ResolutionStatementDTO } from './ResolutionStatementDTO';
import type { StatementMetaDTO } from './StatementMetaDTO';
/**
 * A resolution statement keeps the relation between a namespace alias used in a transaction
 * and the real address or mosaicId.
 * @export
 * @interface ResolutionStatementInfoDTO
 */
export interface ResolutionStatementInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof ResolutionStatementInfoDTO
     */
    id: string;
    /**
     *
     * @type {StatementMetaDTO}
     * @memberof ResolutionStatementInfoDTO
     */
    meta: StatementMetaDTO;
    /**
     *
     * @type {ResolutionStatementDTO}
     * @memberof ResolutionStatementInfoDTO
     */
    statement: ResolutionStatementDTO;
}
/**
 * Check if a given object implements the ResolutionStatementInfoDTO interface.
 */
export declare function instanceOfResolutionStatementInfoDTO(value: object): boolean;
export declare function ResolutionStatementInfoDTOFromJSON(json: any): ResolutionStatementInfoDTO;
export declare function ResolutionStatementInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementInfoDTO;
export declare function ResolutionStatementInfoDTOToJSON(value?: ResolutionStatementInfoDTO | null): any;