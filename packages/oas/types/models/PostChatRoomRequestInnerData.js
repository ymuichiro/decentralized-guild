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
 * Check if a given object implements the PostChatRoomRequestInnerData interface.
 */
export function instanceOfPostChatRoomRequestInnerData(value) {
    var isInstance = true;
    isInstance = isInstance && 'recipients' in value;
    return isInstance;
}
export function PostChatRoomRequestInnerDataFromJSON(json) {
    return PostChatRoomRequestInnerDataFromJSONTyped(json, false);
}
export function PostChatRoomRequestInnerDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        recipients: json['recipients'],
    };
}
export function PostChatRoomRequestInnerDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        recipients: value.recipients,
    };
}
