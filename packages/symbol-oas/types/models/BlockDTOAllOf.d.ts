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
/**
 *
 * @export
 * @interface BlockDTOAllOf
 */
export interface BlockDTOAllOf {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    height: string;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    timestamp: string;
    /**
     * Determines how hard is to harvest a new block, based on previous blocks.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    difficulty: string;
    /**
     * 32-bytes VRF proof gamma.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    proofGamma: string;
    /**
     * 16-bytes VRF proof verification hash.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    proofVerificationHash: string;
    /**
     * 32-bytes VRF proof scalar.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    proofScalar: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    previousBlockHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    transactionsHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    receiptsHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    stateHash: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof BlockDTOAllOf
     */
    beneficiaryAddress: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof BlockDTOAllOf
     */
    feeMultiplier: number;
}
/**
 * Check if a given object implements the BlockDTOAllOf interface.
 */
export declare function instanceOfBlockDTOAllOf(value: object): boolean;
export declare function BlockDTOAllOfFromJSON(json: any): BlockDTOAllOf;
export declare function BlockDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDTOAllOf;
export declare function BlockDTOAllOfToJSON(value?: BlockDTOAllOf | null): any;
