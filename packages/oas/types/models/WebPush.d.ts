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
import type { WebPushKeys } from './WebPushKeys';
/**
 *
 * @export
 * @interface WebPush
 */
export interface WebPush {
    /**
     *
     * @type {string}
     * @memberof WebPush
     */
    endpoint?: string;
    /**
     *
     * @type {number}
     * @memberof WebPush
     */
    expirationTime?: number | null;
    /**
     *
     * @type {WebPushKeys}
     * @memberof WebPush
     */
    keys?: WebPushKeys;
}
/**
 * Check if a given object implements the WebPush interface.
 */
export declare function instanceOfWebPush(value: object): boolean;
export declare function WebPushFromJSON(json: any): WebPush;
export declare function WebPushFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebPush;
export declare function WebPushToJSON(value?: WebPush | null): any;
