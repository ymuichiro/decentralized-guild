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
 *
 * @export
 */
export var QuestStatusEnum = {
    Wanted: 'WANTED',
    Working: 'WORKING',
    Completed: 'COMPLETED',
    Cancelled: 'CANCELLED',
};
export function QuestStatusEnumFromJSON(json) {
    return QuestStatusEnumFromJSONTyped(json, false);
}
export function QuestStatusEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function QuestStatusEnumToJSON(value) {
    return value;
}
