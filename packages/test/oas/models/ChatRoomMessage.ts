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
 * @interface ChatRoomMessage
 */
export interface ChatRoomMessage {
    /**
     * 
     * @type {string}
     * @memberof ChatRoomMessage
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ChatRoomMessage
     */
    body: string;
    /**
     * 
     * @type {Date}
     * @memberof ChatRoomMessage
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ChatRoomMessage
     */
    userId: string;
}

/**
 * Check if a given object implements the ChatRoomMessage interface.
 */
export function instanceOfChatRoomMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function ChatRoomMessageFromJSON(json: any): ChatRoomMessage {
    return ChatRoomMessageFromJSONTyped(json, false);
}

export function ChatRoomMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatRoomMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'body': json['body'],
        'createdAt': (new Date(json['createdAt'])),
        'userId': json['userId'],
    };
}

export function ChatRoomMessageToJSON(value?: ChatRoomMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'body': value.body,
        'createdAt': (value.createdAt.toISOString()),
        'userId': value.userId,
    };
}

