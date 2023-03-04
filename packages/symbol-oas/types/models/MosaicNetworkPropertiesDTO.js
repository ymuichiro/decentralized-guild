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
import { exists } from '../runtime';
/**
 * Check if a given object implements the MosaicNetworkPropertiesDTO interface.
 */
export function instanceOfMosaicNetworkPropertiesDTO(value) {
    var isInstance = true;
    return isInstance;
}
export function MosaicNetworkPropertiesDTOFromJSON(json) {
    return MosaicNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function MosaicNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        maxMosaicsPerAccount: !exists(json, 'maxMosaicsPerAccount') ? undefined : json['maxMosaicsPerAccount'],
        maxMosaicDuration: !exists(json, 'maxMosaicDuration') ? undefined : json['maxMosaicDuration'],
        maxMosaicDivisibility: !exists(json, 'maxMosaicDivisibility') ? undefined : json['maxMosaicDivisibility'],
        mosaicRentalFeeSinkAddress: !exists(json, 'mosaicRentalFeeSinkAddress')
            ? undefined
            : json['mosaicRentalFeeSinkAddress'],
        mosaicRentalFee: !exists(json, 'mosaicRentalFee') ? undefined : json['mosaicRentalFee'],
    };
}
export function MosaicNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        maxMosaicsPerAccount: value.maxMosaicsPerAccount,
        maxMosaicDuration: value.maxMosaicDuration,
        maxMosaicDivisibility: value.maxMosaicDivisibility,
        mosaicRentalFeeSinkAddress: value.mosaicRentalFeeSinkAddress,
        mosaicRentalFee: value.mosaicRentalFee,
    };
}