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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WebPushKeys
 */
export interface WebPushKeys {
    /**
     * 
     * @type {string}
     * @memberof WebPushKeys
     */
    p256dh: string;
    /**
     * 
     * @type {string}
     * @memberof WebPushKeys
     */
    auth: string;
}

/**
 * Check if a given object implements the WebPushKeys interface.
 */
export function instanceOfWebPushKeys(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "p256dh" in value;
    isInstance = isInstance && "auth" in value;

    return isInstance;
}

export function WebPushKeysFromJSON(json: any): WebPushKeys {
    return WebPushKeysFromJSONTyped(json, false);
}

export function WebPushKeysFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebPushKeys {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'p256dh': json['p256dh'],
        'auth': json['auth'],
    };
}

export function WebPushKeysToJSON(value?: WebPushKeys | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'p256dh': value.p256dh,
        'auth': value.auth,
    };
}
