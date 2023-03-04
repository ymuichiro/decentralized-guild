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
 * Chain related configuration properties.
 * @export
 * @interface ChainPropertiesDTO
 */
export interface ChainPropertiesDTO {
    /**
     * Set to true if block chain should calculate state hashes so that state is fully verifiable at each block.
     * @type {boolean}
     * @memberof ChainPropertiesDTO
     */
    enableVerifiableState?: boolean;
    /**
     * Set to true if block chain should calculate receipts so that state changes are fully verifiable at each block.
     * @type {boolean}
     * @memberof ChainPropertiesDTO
     */
    enableVerifiableReceipts?: boolean;
    /**
     * Mosaic id used as primary chain currency.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    currencyMosaicId?: string;
    /**
     * Mosaic id used to provide harvesting ability.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    harvestingMosaicId?: string;
    /**
     * Targeted time between blocks.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    blockGenerationTargetTime?: string;
    /**
     * A higher value makes the network more biased.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    blockTimeSmoothingFactor?: string;
    /**
     * Number of blocks between successive finalization attempts.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    blockFinalizationInterval?: string;
    /**
     * Number of blocks that should be treated as a group for importance purposes.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    importanceGrouping?: string;
    /**
     * Percentage of importance resulting from fee generation and beneficiary usage.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    importanceActivityPercentage?: string;
    /**
     * Maximum number of blocks that can be rolled back.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxRollbackBlocks?: string;
    /**
     * Maximum number of blocks to use in a difficulty calculation.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxDifficultyBlocks?: string;
    /**
     * Default multiplier to use for dynamic fees.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    defaultDynamicFeeMultiplier?: string;
    /**
     * Maximum lifetime a transaction can have before it expires.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxTransactionLifetime?: string;
    /**
     * Maximum future time of a block that can be accepted.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxBlockFutureTime?: string;
    /**
     * Initial currency atomic units available in the network.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    initialCurrencyAtomicUnits?: string;
    /**
     * Maximum atomic units (total-supply * 10 ^ divisibility) of a mosaic allowed in the network.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxMosaicAtomicUnits?: string;
    /**
     * Total whole importance units available in the network.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    totalChainImportance?: string;
    /**
     * Minimum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    minHarvesterBalance?: string;
    /**
     * Maximum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxHarvesterBalance?: string;
    /**
     * Minimum number of harvesting mosaic atomic units needed for an account to be eligible for voting.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    minVoterBalance?: string;
    /**
     * Maximum number of voting keys that can be registered at once per account.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxVotingKeysPerAccount?: string;
    /**
     * Minimum number of finalization rounds for which voting key can be registered.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    minVotingKeyLifetime?: string;
    /**
     * Maximum number of finalization rounds for which voting key can be registered.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxVotingKeyLifetime?: string;
    /**
     * Percentage of the harvested fee that is collected by the beneficiary account.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    harvestBeneficiaryPercentage?: string;
    /**
     * Percentage of the harvested fee that is collected by the network.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    harvestNetworkPercentage?: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    harvestNetworkFeeSinkAddress?: string;
    /**
     * Number of blocks between cache pruning.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    blockPruneInterval?: string;
    /**
     * Maximum number of transactions per block.
     * @type {string}
     * @memberof ChainPropertiesDTO
     */
    maxTransactionsPerBlock?: string;
}
/**
 * Check if a given object implements the ChainPropertiesDTO interface.
 */
export declare function instanceOfChainPropertiesDTO(value: object): boolean;
export declare function ChainPropertiesDTOFromJSON(json: any): ChainPropertiesDTO;
export declare function ChainPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainPropertiesDTO;
export declare function ChainPropertiesDTOToJSON(value?: ChainPropertiesDTO | null): any;
