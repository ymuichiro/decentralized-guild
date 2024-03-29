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
 *
 * @export
 * @interface PutUserRequestBody
 */
export interface PutUserRequestBody {
    /**
     *
     * @type {string}
     * @memberof PutUserRequestBody
     */
    name: string;
}
/**
 * Check if a given object implements the PutUserRequestBody interface.
 */
export declare function instanceOfPutUserRequestBody(value: object): boolean;
export declare function PutUserRequestBodyFromJSON(json: any): PutUserRequestBody;
export declare function PutUserRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutUserRequestBody;
export declare function PutUserRequestBodyToJSON(value?: PutUserRequestBody | null): any;
