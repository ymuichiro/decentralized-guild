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
import { AccountTypeEnumFromJSON, AccountTypeEnumToJSON } from './AccountTypeEnum';
import { ActivityBucketDTOFromJSON, ActivityBucketDTOToJSON, } from './ActivityBucketDTO';
import { MosaicFromJSON, MosaicToJSON } from './Mosaic';
import { SupplementalPublicKeysDTOFromJSON, SupplementalPublicKeysDTOToJSON, } from './SupplementalPublicKeysDTO';
/**
 * Check if a given object implements the AccountDTO interface.
 */
export function instanceOfAccountDTO(value) {
    var isInstance = true;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'address' in value;
    isInstance = isInstance && 'addressHeight' in value;
    isInstance = isInstance && 'publicKey' in value;
    isInstance = isInstance && 'publicKeyHeight' in value;
    isInstance = isInstance && 'accountType' in value;
    isInstance = isInstance && 'supplementalPublicKeys' in value;
    isInstance = isInstance && 'activityBuckets' in value;
    isInstance = isInstance && 'mosaics' in value;
    isInstance = isInstance && 'importance' in value;
    isInstance = isInstance && 'importanceHeight' in value;
    return isInstance;
}
export function AccountDTOFromJSON(json) {
    return AccountDTOFromJSONTyped(json, false);
}
export function AccountDTOFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: json['version'],
        address: json['address'],
        addressHeight: json['addressHeight'],
        publicKey: json['publicKey'],
        publicKeyHeight: json['publicKeyHeight'],
        accountType: AccountTypeEnumFromJSON(json['accountType']),
        supplementalPublicKeys: SupplementalPublicKeysDTOFromJSON(json['supplementalPublicKeys']),
        activityBuckets: json['activityBuckets'].map(ActivityBucketDTOFromJSON),
        mosaics: json['mosaics'].map(MosaicFromJSON),
        importance: json['importance'],
        importanceHeight: json['importanceHeight'],
    };
}
export function AccountDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        address: value.address,
        addressHeight: value.addressHeight,
        publicKey: value.publicKey,
        publicKeyHeight: value.publicKeyHeight,
        accountType: AccountTypeEnumToJSON(value.accountType),
        supplementalPublicKeys: SupplementalPublicKeysDTOToJSON(value.supplementalPublicKeys),
        activityBuckets: value.activityBuckets.map(ActivityBucketDTOToJSON),
        mosaics: value.mosaics.map(MosaicToJSON),
        importance: value.importance,
        importanceHeight: value.importanceHeight,
    };
}
