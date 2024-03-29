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
import { MosaicRestrictionTypeEnumFromJSON, MosaicRestrictionTypeEnumToJSON, } from './MosaicRestrictionTypeEnum';
/**
 * Check if a given object implements the MosaicGlobalRestrictionTransactionBodyDTO interface.
 */
export function instanceOfMosaicGlobalRestrictionTransactionBodyDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'mosaicId' in value;
    isInstance = isInstance && 'referenceMosaicId' in value;
    isInstance = isInstance && 'restrictionKey' in value;
    isInstance = isInstance && 'previousRestrictionValue' in value;
    isInstance = isInstance && 'newRestrictionValue' in value;
    isInstance = isInstance && 'previousRestrictionType' in value;
    isInstance = isInstance && 'newRestrictionType' in value;
    return isInstance;
}
export function MosaicGlobalRestrictionTransactionBodyDTOFromJSON(json) {
    return MosaicGlobalRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        mosaicId: json['mosaicId'],
        referenceMosaicId: json['referenceMosaicId'],
        restrictionKey: json['restrictionKey'],
        previousRestrictionValue: json['previousRestrictionValue'],
        newRestrictionValue: json['newRestrictionValue'],
        previousRestrictionType: MosaicRestrictionTypeEnumFromJSON(json['previousRestrictionType']),
        newRestrictionType: MosaicRestrictionTypeEnumFromJSON(json['newRestrictionType']),
    };
}
export function MosaicGlobalRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        mosaicId: value.mosaicId,
        referenceMosaicId: value.referenceMosaicId,
        restrictionKey: value.restrictionKey,
        previousRestrictionValue: value.previousRestrictionValue,
        newRestrictionValue: value.newRestrictionValue,
        previousRestrictionType: MosaicRestrictionTypeEnumToJSON(value.previousRestrictionType),
        newRestrictionType: MosaicRestrictionTypeEnumToJSON(value.newRestrictionType),
    };
}
