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
import { ResolutionEntryDTOResolvedFromJSON, ResolutionEntryDTOResolvedToJSON, } from './ResolutionEntryDTOResolved';
import { SourceDTOFromJSON, SourceDTOToJSON } from './SourceDTO';
/**
 * Check if a given object implements the ResolutionEntryDTO interface.
 */
export function instanceOfResolutionEntryDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'source' in value;
    isInstance = isInstance && 'resolved' in value;
    return isInstance;
}
export function ResolutionEntryDTOFromJSON(json) {
    return ResolutionEntryDTOFromJSONTyped(json, false);
}
export function ResolutionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        source: SourceDTOFromJSON(json['source']),
        resolved: ResolutionEntryDTOResolvedFromJSON(json['resolved']),
    };
}
export function ResolutionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        source: SourceDTOToJSON(value.source),
        resolved: ResolutionEntryDTOResolvedToJSON(value.resolved),
    };
}
