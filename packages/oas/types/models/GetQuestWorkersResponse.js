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
import { QuestWorkerFromJSON, QuestWorkerToJSON } from './QuestWorker';
/**
 * Check if a given object implements the GetQuestWorkersResponse interface.
 */
export function instanceOfGetQuestWorkersResponse(value) {
    var isInstance = true;
    isInstance = isInstance && 'data' in value;
    return isInstance;
}
export function GetQuestWorkersResponseFromJSON(json) {
    return GetQuestWorkersResponseFromJSONTyped(json, false);
}
export function GetQuestWorkersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json['data'].map(QuestWorkerFromJSON),
    };
}
export function GetQuestWorkersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(QuestWorkerToJSON),
    };
}
