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
 * @interface PostQuestApprovalResponse
 */
export interface PostQuestApprovalResponse {
    /**
     * serialized aggregate complete transaction
     * @type {string}
     * @memberof PostQuestApprovalResponse
     */
    transaction: string;
}
/**
 * Check if a given object implements the PostQuestApprovalResponse interface.
 */
export declare function instanceOfPostQuestApprovalResponse(value: object): boolean;
export declare function PostQuestApprovalResponseFromJSON(json: any): PostQuestApprovalResponse;
export declare function PostQuestApprovalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostQuestApprovalResponse;
export declare function PostQuestApprovalResponseToJSON(value?: PostQuestApprovalResponse | null): any;
