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
/**
 * Check if a given object implements the CosignatureDTOAllOf interface.
 */
export function instanceOfCosignatureDTOAllOf(value) {
    var isInstance = true;
    isInstance = isInstance && 'version' in value;
    isInstance = isInstance && 'signerPublicKey' in value;
    return isInstance;
}
export function CosignatureDTOAllOfFromJSON(json) {
    return CosignatureDTOAllOfFromJSONTyped(json, false);
}
export function CosignatureDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: json['version'],
        signerPublicKey: json['signerPublicKey'],
    };
}
export function CosignatureDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        signerPublicKey: value.signerPublicKey,
    };
}