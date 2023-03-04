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
import type { QuestStatusEnum } from './QuestStatusEnum';
import {
    QuestStatusEnumFromJSON,
    QuestStatusEnumFromJSONTyped,
    QuestStatusEnumToJSON,
} from './QuestStatusEnum';
import type { QuestWorker } from './QuestWorker';
import {
    QuestWorkerFromJSON,
    QuestWorkerFromJSONTyped,
    QuestWorkerToJSON,
} from './QuestWorker';
import type { Reward } from './Reward';
import {
    RewardFromJSON,
    RewardFromJSONTyped,
    RewardToJSON,
} from './Reward';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Quest
 */
export interface Quest {
    /**
     * Quest ID
     * @type {string}
     * @memberof Quest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Quest
     */
    transactionHash?: string;
    /**
     * 
     * @type {string}
     * @memberof Quest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Quest
     */
    description: string;
    /**
     * 
     * @type {Reward}
     * @memberof Quest
     */
    reward?: Reward;
    /**
     * 
     * @type {User}
     * @memberof Quest
     */
    owner?: User;
    /**
     * 
     * @type {string}
     * @memberof Quest
     */
    ownerPublicKey: string;
    /**
     * 
     * @type {Array<QuestWorker>}
     * @memberof Quest
     */
    workers: Array<QuestWorker>;
    /**
     * 
     * @type {QuestStatusEnum}
     * @memberof Quest
     */
    status: QuestStatusEnum;
    /**
     * Delivery completion date（= Invalid Date of Secret Lock Transaction）
     * @type {Date}
     * @memberof Quest
     */
    deadline: Date;
    /**
     * UTC
     * @type {Date}
     * @memberof Quest
     */
    createdAt: Date;
    /**
     * UTC
     * @type {Date}
     * @memberof Quest
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Quest interface.
 */
export function instanceOfQuest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "ownerPublicKey" in value;
    isInstance = isInstance && "workers" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function QuestFromJSON(json: any): Quest {
    return QuestFromJSONTyped(json, false);
}

export function QuestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'transactionHash': !exists(json, 'transactionHash') ? undefined : json['transactionHash'],
        'title': json['title'],
        'description': json['description'],
        'reward': !exists(json, 'reward') ? undefined : RewardFromJSON(json['reward']),
        'owner': !exists(json, 'owner') ? undefined : UserFromJSON(json['owner']),
        'ownerPublicKey': json['ownerPublicKey'],
        'workers': ((json['workers'] as Array<any>).map(QuestWorkerFromJSON)),
        'status': QuestStatusEnumFromJSON(json['status']),
        'deadline': (new Date(json['deadline'])),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function QuestToJSON(value?: Quest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'transactionHash': value.transactionHash,
        'title': value.title,
        'description': value.description,
        'reward': RewardToJSON(value.reward),
        'owner': UserToJSON(value.owner),
        'ownerPublicKey': value.ownerPublicKey,
        'workers': ((value.workers as Array<any>).map(QuestWorkerToJSON)),
        'status': QuestStatusEnumToJSON(value.status),
        'deadline': (value.deadline.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

