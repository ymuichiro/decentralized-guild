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
import { exists } from '../runtime';
/**
 * Check if a given object implements the ChatRoomMessage interface.
 */
export function instanceOfChatRoomMessage(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'body' in value;
    isInstance = isInstance && 'createdAt' in value;
    return isInstance;
}
export function ChatRoomMessageFromJSON(json) {
    return ChatRoomMessageFromJSONTyped(json, false);
}
export function ChatRoomMessageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        body: json['body'],
        createdAt: new Date(json['createdAt']),
        userId: !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function ChatRoomMessageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        body: value.body,
        createdAt: value.createdAt.toISOString(),
        userId: value.userId,
    };
}
