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
 * Check if a given object implements the MultisigNetworkPropertiesDTO interface.
 */
export function instanceOfMultisigNetworkPropertiesDTO(value) {
    var isInstance = true;
    return isInstance;
}
export function MultisigNetworkPropertiesDTOFromJSON(json) {
    return MultisigNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function MultisigNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        maxMultisigDepth: !exists(json, 'maxMultisigDepth') ? undefined : json['maxMultisigDepth'],
        maxCosignatoriesPerAccount: !exists(json, 'maxCosignatoriesPerAccount')
            ? undefined
            : json['maxCosignatoriesPerAccount'],
        maxCosignedAccountsPerAccount: !exists(json, 'maxCosignedAccountsPerAccount')
            ? undefined
            : json['maxCosignedAccountsPerAccount'],
    };
}
export function MultisigNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        maxMultisigDepth: value.maxMultisigDepth,
        maxCosignatoriesPerAccount: value.maxCosignatoriesPerAccount,
        maxCosignedAccountsPerAccount: value.maxCosignedAccountsPerAccount,
    };
}