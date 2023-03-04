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
import { PageNationFromJSON, PageNationToJSON } from './PageNation';
import { QuestFromJSON, QuestToJSON } from './Quest';
/**
 * Check if a given object implements the GetQuestsResponseInner interface.
 */
export function instanceOfGetQuestsResponseInner(value) {
    var isInstance = true;
    isInstance = isInstance && 'pageNation' in value;
    isInstance = isInstance && 'data' in value;
    return isInstance;
}
export function GetQuestsResponseInnerFromJSON(json) {
    return GetQuestsResponseInnerFromJSONTyped(json, false);
}
export function GetQuestsResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pageNation: PageNationFromJSON(json['pageNation']),
        data: json['data'].map(QuestFromJSON),
    };
}
export function GetQuestsResponseInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pageNation: PageNationToJSON(value.pageNation),
        data: value.data.map(QuestToJSON),
    };
}