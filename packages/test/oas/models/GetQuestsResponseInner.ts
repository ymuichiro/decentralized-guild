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
import type { PageNation } from './PageNation';
import {
    PageNationFromJSON,
    PageNationFromJSONTyped,
    PageNationToJSON,
} from './PageNation';
import type { Quest } from './Quest';
import {
    QuestFromJSON,
    QuestFromJSONTyped,
    QuestToJSON,
} from './Quest';

/**
 * 
 * @export
 * @interface GetQuestsResponseInner
 */
export interface GetQuestsResponseInner {
    /**
     * 
     * @type {PageNation}
     * @memberof GetQuestsResponseInner
     */
    pageNation: PageNation;
    /**
     * 
     * @type {Array<Quest>}
     * @memberof GetQuestsResponseInner
     */
    data: Array<Quest>;
}

/**
 * Check if a given object implements the GetQuestsResponseInner interface.
 */
export function instanceOfGetQuestsResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pageNation" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetQuestsResponseInnerFromJSON(json: any): GetQuestsResponseInner {
    return GetQuestsResponseInnerFromJSONTyped(json, false);
}

export function GetQuestsResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetQuestsResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageNation': PageNationFromJSON(json['pageNation']),
        'data': ((json['data'] as Array<any>).map(QuestFromJSON)),
    };
}

export function GetQuestsResponseInnerToJSON(value?: GetQuestsResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageNation': PageNationToJSON(value.pageNation),
        'data': ((value.data as Array<any>).map(QuestToJSON)),
    };
}

