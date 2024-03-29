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
export declare const QuestStatusEnum: {
    readonly Wanted: "WANTED";
    readonly Working: "WORKING";
    readonly Completed: "COMPLETED";
    readonly Cancelled: "CANCELLED";
};
export type QuestStatusEnum = (typeof QuestStatusEnum)[keyof typeof QuestStatusEnum];
export declare function QuestStatusEnumFromJSON(json: any): QuestStatusEnum;
export declare function QuestStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestStatusEnum;
export declare function QuestStatusEnumToJSON(value?: QuestStatusEnum | null): any;
