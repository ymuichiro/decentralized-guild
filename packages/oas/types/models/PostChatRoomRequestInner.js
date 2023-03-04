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
import { PostChatRoomRequestInnerDataFromJSON, PostChatRoomRequestInnerDataToJSON, } from './PostChatRoomRequestInnerData';
/**
 * Check if a given object implements the PostChatRoomRequestInner interface.
 */
export function instanceOfPostChatRoomRequestInner(value) {
    var isInstance = true;
    isInstance = isInstance && 'data' in value;
    return isInstance;
}
export function PostChatRoomRequestInnerFromJSON(json) {
    return PostChatRoomRequestInnerFromJSONTyped(json, false);
}
export function PostChatRoomRequestInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: PostChatRoomRequestInnerDataFromJSON(json['data']),
    };
}
export function PostChatRoomRequestInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: PostChatRoomRequestInnerDataToJSON(value.data),
    };
}