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
import type { MerkleStateInfoDTOTreeInner } from './MerkleStateInfoDTOTreeInner';
/**
 * The merkle path information clients can use to proof the state of the given entity.
 * @export
 * @interface MerkleStateInfoDTO
 */
export interface MerkleStateInfoDTO {
    /**
     * The hex information of the complete merkle tree as returned by server api.
     * More information can be found in chapter 4.3 of the catapult whitepaper.
     * @type {string}
     * @memberof MerkleStateInfoDTO
     */
    raw: string;
    /**
     * Merkle tree parsed from merkle tree raw.
     * @type {Array<MerkleStateInfoDTOTreeInner>}
     * @memberof MerkleStateInfoDTO
     */
    tree: Array<MerkleStateInfoDTOTreeInner>;
}
/**
 * Check if a given object implements the MerkleStateInfoDTO interface.
 */
export declare function instanceOfMerkleStateInfoDTO(value: object): boolean;
export declare function MerkleStateInfoDTOFromJSON(json: any): MerkleStateInfoDTO;
export declare function MerkleStateInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleStateInfoDTO;
export declare function MerkleStateInfoDTOToJSON(value?: MerkleStateInfoDTO | null): any;
