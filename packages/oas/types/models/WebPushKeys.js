/* tslint:disable */
/* eslint-disable */
/**
 * Decentralized-Guild
 * About Decentralized Guild System APIs. Please use it when expanding the system.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: ym.u.ichiro@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the WebPushKeys interface.
 */
export function instanceOfWebPushKeys(value) {
    var isInstance = true;
    isInstance = isInstance && 'p256dh' in value;
    isInstance = isInstance && 'auth' in value;
    return isInstance;
}
export function WebPushKeysFromJSON(json) {
    return WebPushKeysFromJSONTyped(json, false);
}
export function WebPushKeysFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        p256dh: json['p256dh'],
        auth: json['auth'],
    };
}
export function WebPushKeysToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        p256dh: value.p256dh,
        auth: value.auth,
    };
}
