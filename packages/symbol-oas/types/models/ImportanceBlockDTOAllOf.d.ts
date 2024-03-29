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
 * @interface ImportanceBlockDTOAllOf
 */
export interface ImportanceBlockDTOAllOf {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTOAllOf
     */
    votingEligibleAccountsCount: number;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    harvestingEligibleAccountsCount: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    totalVotingBalance: string;
    /**
     *
     * @type {string}
     * @memberof ImportanceBlockDTOAllOf
     */
    previousImportanceBlockHash: string;
}
/**
 * Check if a given object implements the ImportanceBlockDTOAllOf interface.
 */
export declare function instanceOfImportanceBlockDTOAllOf(value: object): boolean;
export declare function ImportanceBlockDTOAllOfFromJSON(json: any): ImportanceBlockDTOAllOf;
export declare function ImportanceBlockDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTOAllOf;
export declare function ImportanceBlockDTOAllOfToJSON(value?: ImportanceBlockDTOAllOf | null): any;
