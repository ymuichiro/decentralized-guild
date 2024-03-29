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
import { ResolutionStatementDTOFromJSON, ResolutionStatementDTOToJSON, } from './ResolutionStatementDTO';
import { StatementMetaDTOFromJSON, StatementMetaDTOToJSON } from './StatementMetaDTO';
/**
 * Check if a given object implements the ResolutionStatementInfoDTO interface.
 */
export function instanceOfResolutionStatementInfoDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'meta' in value;
    isInstance = isInstance && 'statement' in value;
    return isInstance;
}
export function ResolutionStatementInfoDTOFromJSON(json) {
    return ResolutionStatementInfoDTOFromJSONTyped(json, false);
}
export function ResolutionStatementInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        meta: StatementMetaDTOFromJSON(json['meta']),
        statement: ResolutionStatementDTOFromJSON(json['statement']),
    };
}
export function ResolutionStatementInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        meta: StatementMetaDTOToJSON(value.meta),
        statement: ResolutionStatementDTOToJSON(value.statement),
    };
}
