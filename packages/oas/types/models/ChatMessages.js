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
import { UserFromJSON, UserToJSON } from './User';
/**
 * Check if a given object implements the ChatMessages interface.
 */
export function instanceOfChatMessages(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'body' in value;
    isInstance = isInstance && 'createdAt' in value;
    return isInstance;
}
export function ChatMessagesFromJSON(json) {
    return ChatMessagesFromJSONTyped(json, false);
}
export function ChatMessagesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        body: json['body'],
        createdAt: new Date(json['createdAt']),
        user: !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}
export function ChatMessagesToJSON(value) {
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
        user: UserToJSON(value.user),
    };
}
