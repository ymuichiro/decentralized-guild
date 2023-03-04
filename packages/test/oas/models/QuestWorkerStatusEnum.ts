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
export const QuestWorkerStatusEnum = {
    Applying: 'APPLYING',
    Accepted: 'ACCEPTED',
    Completed: 'COMPLETED',
    Rejected: 'REJECTED'
} as const;
export type QuestWorkerStatusEnum = typeof QuestWorkerStatusEnum[keyof typeof QuestWorkerStatusEnum];


export function QuestWorkerStatusEnumFromJSON(json: any): QuestWorkerStatusEnum {
    return QuestWorkerStatusEnumFromJSONTyped(json, false);
}

export function QuestWorkerStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestWorkerStatusEnum {
    return json as QuestWorkerStatusEnum;
}

export function QuestWorkerStatusEnumToJSON(value?: QuestWorkerStatusEnum | null): any {
    return value as any;
}
