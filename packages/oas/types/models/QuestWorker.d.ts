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
import type { QuestWorkerStatusEnum } from './QuestWorkerStatusEnum';
import type { User } from './User';
/**
 *
 * @export
 * @interface QuestWorker
 */
export interface QuestWorker {
    /**
     *
     * @type {string}
     * @memberof QuestWorker
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof QuestWorker
     */
    userId?: string;
    /**
     *
     * @type {string}
     * @memberof QuestWorker
     */
    questId: string;
    /**
     *
     * @type {QuestWorkerStatusEnum}
     * @memberof QuestWorker
     */
    status: QuestWorkerStatusEnum;
    /**
     *
     * @type {User}
     * @memberof QuestWorker
     */
    worker?: User;
    /**
     *
     * @type {Date}
     * @memberof QuestWorker
     */
    createdAt: Date;
}
/**
 * Check if a given object implements the QuestWorker interface.
 */
export declare function instanceOfQuestWorker(value: object): boolean;
export declare function QuestWorkerFromJSON(json: any): QuestWorker;
export declare function QuestWorkerFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestWorker;
export declare function QuestWorkerToJSON(value?: QuestWorker | null): any;