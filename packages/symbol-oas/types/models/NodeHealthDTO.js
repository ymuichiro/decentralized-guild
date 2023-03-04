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
import { NodeStatusEnumFromJSON, NodeStatusEnumToJSON } from './NodeStatusEnum';
/**
 * Check if a given object implements the NodeHealthDTO interface.
 */
export function instanceOfNodeHealthDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'apiNode' in value;
    isInstance = isInstance && 'db' in value;
    return isInstance;
}
export function NodeHealthDTOFromJSON(json) {
    return NodeHealthDTOFromJSONTyped(json, false);
}
export function NodeHealthDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        apiNode: NodeStatusEnumFromJSON(json['apiNode']),
        db: NodeStatusEnumFromJSON(json['db']),
    };
}
export function NodeHealthDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        apiNode: NodeStatusEnumToJSON(value.apiNode),
        db: NodeStatusEnumToJSON(value.db),
    };
}