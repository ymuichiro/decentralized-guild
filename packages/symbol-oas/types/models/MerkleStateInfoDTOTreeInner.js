/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MerkleTreeBranchLinkDTOFromJSON, MerkleTreeBranchLinkDTOToJSON, } from './MerkleTreeBranchLinkDTO';
import { MerkleTreeNodeTypeEnumFromJSON, MerkleTreeNodeTypeEnumToJSON, } from './MerkleTreeNodeTypeEnum';
/**
 * Check if a given object implements the MerkleStateInfoDTOTreeInner interface.
 */
export function instanceOfMerkleStateInfoDTOTreeInner(value) {
    var isInstance = true;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'path' in value;
    isInstance = isInstance && 'encodedPath' in value;
    isInstance = isInstance && 'nibbleCount' in value;
    isInstance = isInstance && 'linkMask' in value;
    isInstance = isInstance && 'links' in value;
    isInstance = isInstance && 'branchHash' in value;
    isInstance = isInstance && 'value' in value;
    isInstance = isInstance && 'leafHash' in value;
    return isInstance;
}
export function MerkleStateInfoDTOTreeInnerFromJSON(json) {
    return MerkleStateInfoDTOTreeInnerFromJSONTyped(json, false);
}
export function MerkleStateInfoDTOTreeInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: MerkleTreeNodeTypeEnumFromJSON(json['type']),
        path: json['path'],
        encodedPath: json['encodedPath'],
        nibbleCount: json['nibbleCount'],
        linkMask: json['linkMask'],
        links: json['links'].map(MerkleTreeBranchLinkDTOFromJSON),
        branchHash: json['branchHash'],
        value: json['value'],
        leafHash: json['leafHash'],
    };
}
export function MerkleStateInfoDTOTreeInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: MerkleTreeNodeTypeEnumToJSON(value.type),
        path: value.path,
        encodedPath: value.encodedPath,
        nibbleCount: value.nibbleCount,
        linkMask: value.linkMask,
        links: value.links.map(MerkleTreeBranchLinkDTOToJSON),
        branchHash: value.branchHash,
        value: value.value,
        leafHash: value.leafHash,
    };
}
