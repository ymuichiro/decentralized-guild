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
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON } from './NetworkTypeEnum';
/**
 * Check if a given object implements the AccountMosaicRestrictionTransactionDTO interface.
 */
export function instanceOfAccountMosaicRestrictionTransactionDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'size' in value;
    isInstance = isInstance && 'signature' in value;
    isInstance = isInstance && 'signerPublicKey' in value;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'network' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'maxFee' in value;
    isInstance = isInstance && 'deadline' in value;
    isInstance = isInstance && 'restrictionFlags' in value;
    return isInstance;
}
export function AccountMosaicRestrictionTransactionDTOFromJSON(json) {
    return AccountMosaicRestrictionTransactionDTOFromJSONTyped(json, false);
}
export function AccountMosaicRestrictionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        size: json['size'],
        signature: json['signature'],
        signerPublicKey: json['signerPublicKey'],
        version: json['version'],
        network: NetworkTypeEnumFromJSON(json['network']),
        type: json['type'],
        maxFee: json['maxFee'],
        deadline: json['deadline'],
        restrictionFlags: AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        restrictionAdditions: !exists(json, 'restrictionAdditions') ? undefined : json['restrictionAdditions'],
        restrictionDeletions: !exists(json, 'restrictionDeletions') ? undefined : json['restrictionDeletions'],
    };
}
export function AccountMosaicRestrictionTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        size: value.size,
        signature: value.signature,
        signerPublicKey: value.signerPublicKey,
        version: value.version,
        network: NetworkTypeEnumToJSON(value.network),
        type: value.type,
        maxFee: value.maxFee,
        deadline: value.deadline,
        restrictionFlags: AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        restrictionAdditions: value.restrictionAdditions,
        restrictionDeletions: value.restrictionDeletions,
    };
}
