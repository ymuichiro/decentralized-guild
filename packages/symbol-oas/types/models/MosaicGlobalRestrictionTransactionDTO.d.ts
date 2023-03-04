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
import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
/**
 * Transaction to set a network-wide restriction rule to a mosaic.
 * @export
 * @interface MosaicGlobalRestrictionTransactionDTO
 */
export interface MosaicGlobalRestrictionTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    version: number;
    /**
     *
     * @type {NetworkTypeEnum}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     *
     * @type {number}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    deadline: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    mosaicId: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    referenceMosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    newRestrictionValue: string;
    /**
     *
     * @type {MosaicRestrictionTypeEnum}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    previousRestrictionType: MosaicRestrictionTypeEnum;
    /**
     *
     * @type {MosaicRestrictionTypeEnum}
     * @memberof MosaicGlobalRestrictionTransactionDTO
     */
    newRestrictionType: MosaicRestrictionTypeEnum;
}
/**
 * Check if a given object implements the MosaicGlobalRestrictionTransactionDTO interface.
 */
export declare function instanceOfMosaicGlobalRestrictionTransactionDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionTransactionDTOFromJSON(json: any): MosaicGlobalRestrictionTransactionDTO;
export declare function MosaicGlobalRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionTransactionDTO;
export declare function MosaicGlobalRestrictionTransactionDTOToJSON(value?: MosaicGlobalRestrictionTransactionDTO | null): any;
