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
 * @interface EmbeddedTransactionMetaDTO
 */
export interface EmbeddedTransactionMetaDTO {
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof EmbeddedTransactionMetaDTO
     */
    height: string;
    /**
     *
     * @type {string}
     * @memberof EmbeddedTransactionMetaDTO
     */
    aggregateHash: string;
    /**
     * Identifier of the aggregate transaction.
     * @type {string}
     * @memberof EmbeddedTransactionMetaDTO
     */
    aggregateId: string;
    /**
     * Transaction index within the aggregate.
     * @type {number}
     * @memberof EmbeddedTransactionMetaDTO
     */
    index: number;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof EmbeddedTransactionMetaDTO
     */
    timestamp?: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof EmbeddedTransactionMetaDTO
     */
    feeMultiplier?: number;
}
/**
 * Check if a given object implements the EmbeddedTransactionMetaDTO interface.
 */
export declare function instanceOfEmbeddedTransactionMetaDTO(value: object): boolean;
export declare function EmbeddedTransactionMetaDTOFromJSON(json: any): EmbeddedTransactionMetaDTO;
export declare function EmbeddedTransactionMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionMetaDTO;
export declare function EmbeddedTransactionMetaDTOToJSON(value?: EmbeddedTransactionMetaDTO | null): any;
