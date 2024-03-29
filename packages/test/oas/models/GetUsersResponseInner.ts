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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface GetUsersResponseInner
 */
export interface GetUsersResponseInner {
    /**
     * 
     * @type {PageNation}
     * @memberof GetUsersResponseInner
     */
    pageNation: PageNation;
    /**
     * 
     * @type {Array<User>}
     * @memberof GetUsersResponseInner
     */
    data: Array<User>;
}

/**
 * Check if a given object implements the GetUsersResponseInner interface.
 */
export function instanceOfGetUsersResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pageNation" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetUsersResponseInnerFromJSON(json: any): GetUsersResponseInner {
    return GetUsersResponseInnerFromJSONTyped(json, false);
}

export function GetUsersResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUsersResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageNation': PageNationFromJSON(json['pageNation']),
        'data': ((json['data'] as Array<any>).map(UserFromJSON)),
    };
}

export function GetUsersResponseInnerToJSON(value?: GetUsersResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageNation': PageNationToJSON(value.pageNation),
        'data': ((value.data as Array<any>).map(UserToJSON)),
    };
}

