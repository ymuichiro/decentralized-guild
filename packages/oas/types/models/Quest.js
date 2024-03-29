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
import { exists } from '../runtime';
import { QuestStatusEnumFromJSON, QuestStatusEnumToJSON } from './QuestStatusEnum';
import { QuestWorkerFromJSON, QuestWorkerToJSON } from './QuestWorker';
import { RewardFromJSON, RewardToJSON } from './Reward';
import { UserFromJSON, UserToJSON } from './User';
/**
 * Check if a given object implements the Quest interface.
 */
export function instanceOfQuest(value) {
    var isInstance = true;
    isInstance = isInstance && 'id' in value;
    isInstance = isInstance && 'title' in value;
    isInstance = isInstance && 'description' in value;
    isInstance = isInstance && 'ownerPublicKey' in value;
    isInstance = isInstance && 'workers' in value;
    isInstance = isInstance && 'status' in value;
    isInstance = isInstance && 'deadline' in value;
    isInstance = isInstance && 'createdAt' in value;
    isInstance = isInstance && 'updatedAt' in value;
    return isInstance;
}
export function QuestFromJSON(json) {
    return QuestFromJSONTyped(json, false);
}
export function QuestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json['id'],
        transactionHash: !exists(json, 'transactionHash') ? undefined : json['transactionHash'],
        title: json['title'],
        description: json['description'],
        reward: !exists(json, 'reward') ? undefined : RewardFromJSON(json['reward']),
        owner: !exists(json, 'owner') ? undefined : UserFromJSON(json['owner']),
        ownerPublicKey: json['ownerPublicKey'],
        workers: json['workers'].map(QuestWorkerFromJSON),
        status: QuestStatusEnumFromJSON(json['status']),
        deadline: new Date(json['deadline']),
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt']),
    };
}
export function QuestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        transactionHash: value.transactionHash,
        title: value.title,
        description: value.description,
        reward: RewardToJSON(value.reward),
        owner: UserToJSON(value.owner),
        ownerPublicKey: value.ownerPublicKey,
        workers: value.workers.map(QuestWorkerToJSON),
        status: QuestStatusEnumToJSON(value.status),
        deadline: value.deadline.toISOString(),
        createdAt: value.createdAt.toISOString(),
        updatedAt: value.updatedAt.toISOString(),
    };
}
