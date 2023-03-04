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
export declare const QuestWorkerStatusEnum: {
    readonly Applying: "APPLYING";
    readonly Accepted: "ACCEPTED";
    readonly Completed: "COMPLETED";
    readonly Rejected: "REJECTED";
};
export type QuestWorkerStatusEnum = (typeof QuestWorkerStatusEnum)[keyof typeof QuestWorkerStatusEnum];
export declare function QuestWorkerStatusEnumFromJSON(json: any): QuestWorkerStatusEnum;
export declare function QuestWorkerStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestWorkerStatusEnum;
export declare function QuestWorkerStatusEnumToJSON(value?: QuestWorkerStatusEnum | null): any;