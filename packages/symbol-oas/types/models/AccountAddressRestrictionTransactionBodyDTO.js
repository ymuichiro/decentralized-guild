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
import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
/**
 * Check if a given object implements the AccountAddressRestrictionTransactionBodyDTO interface.
 */
export function instanceOfAccountAddressRestrictionTransactionBodyDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'restrictionFlags' in value;
    return isInstance;
}
export function AccountAddressRestrictionTransactionBodyDTOFromJSON(json) {
    return AccountAddressRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
export function AccountAddressRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        restrictionFlags: AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        restrictionAdditions: !exists(json, 'restrictionAdditions') ? undefined : json['restrictionAdditions'],
        restrictionDeletions: !exists(json, 'restrictionDeletions') ? undefined : json['restrictionDeletions'],
    };
}
export function AccountAddressRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        restrictionFlags: AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        restrictionAdditions: value.restrictionAdditions,
        restrictionDeletions: value.restrictionDeletions,
    };
}
