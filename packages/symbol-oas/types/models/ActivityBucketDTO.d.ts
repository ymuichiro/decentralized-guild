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
 * Supplementary data stored for importance recalculation.
 * At each importance recalculation, existing buckets are shifted, the working bucket is finalized and a new working bucket is created.
 * Each bucket influences at most five importance recalculations.
 * @export
 * @interface ActivityBucketDTO
 */
export interface ActivityBucketDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof ActivityBucketDTO
     */
    startHeight: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ActivityBucketDTO
     */
    totalFeesPaid: string;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ActivityBucketDTO
     */
    beneficiaryCount: number;
    /**
     * Probability of an account to harvest the next block.
     * @type {string}
     * @memberof ActivityBucketDTO
     */
    rawScore: string;
}
/**
 * Check if a given object implements the ActivityBucketDTO interface.
 */
export declare function instanceOfActivityBucketDTO(value: object): boolean;
export declare function ActivityBucketDTOFromJSON(json: any): ActivityBucketDTO;
export declare function ActivityBucketDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityBucketDTO;
export declare function ActivityBucketDTOToJSON(value?: ActivityBucketDTO | null): any;
