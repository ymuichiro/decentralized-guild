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
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'createdAt' in value;
    return isInstance;
}
export function UserFromJSON(json) {
    return UserFromJSONTyped(json, false);
}
export function UserFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        name: !exists(json, 'name') ? undefined : json['name'],
        image: !exists(json, 'image') ? undefined : json['image'],
        publicKey: !exists(json, 'publicKey') ? undefined : json['publicKey'],
        createdAt: new Date(json['createdAt']),
        email: !exists(json, 'email') ? undefined : json['email'],
    };
}
export function UserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        name: value.name,
        image: value.image,
        publicKey: value.publicKey,
        createdAt: value.createdAt.toISOString(),
        email: value.email,
    };
}
