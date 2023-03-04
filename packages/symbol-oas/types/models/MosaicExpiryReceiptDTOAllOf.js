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
 * Check if a given object implements the MosaicExpiryReceiptDTOAllOf interface.
 */
export function instanceOfMosaicExpiryReceiptDTOAllOf(value) {
    var isInstance = true;
    isInstance = isInstance && 'artifactId' in value;
    return isInstance;
}
export function MosaicExpiryReceiptDTOAllOfFromJSON(json) {
    return MosaicExpiryReceiptDTOAllOfFromJSONTyped(json, false);
}
export function MosaicExpiryReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        artifactId: json['artifactId'],
    };
}
export function MosaicExpiryReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        artifactId: value.artifactId,
    };
}
