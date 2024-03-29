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
import type { PositionEnum } from './PositionEnum';
/**
 * Each merkle path item is composed of a hash, and a position relative to the proofHash being evaluated.
 * @export
 * @interface MerklePathItemDTO
 */
export interface MerklePathItemDTO {
    /**
     *
     * @type {PositionEnum}
     * @memberof MerklePathItemDTO
     */
    position?: PositionEnum;
    /**
     *
     * @type {string}
     * @memberof MerklePathItemDTO
     */
    hash?: string;
}
/**
 * Check if a given object implements the MerklePathItemDTO interface.
 */
export declare function instanceOfMerklePathItemDTO(value: object): boolean;
export declare function MerklePathItemDTOFromJSON(json: any): MerklePathItemDTO;
export declare function MerklePathItemDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerklePathItemDTO;
export declare function MerklePathItemDTOToJSON(value?: MerklePathItemDTO | null): any;
