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
 * Check if a given object implements the Addresses interface.
 */
export function instanceOfAddresses(value) {
    var isInstance = true;
    return isInstance;
}
export function AddressesFromJSON(json) {
    return AddressesFromJSONTyped(json, false);
}
export function AddressesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        addresses: !exists(json, 'addresses') ? undefined : json['addresses'],
    };
}
export function AddressesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        addresses: value.addresses,
    };
}
