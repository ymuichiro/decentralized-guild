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

import { exists, mapValues } from '../runtime';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';
import type { UnresolvedMosaic } from './UnresolvedMosaic';
import {
    UnresolvedMosaicFromJSON,
    UnresolvedMosaicFromJSONTyped,
    UnresolvedMosaicToJSON,
} from './UnresolvedMosaic';

/**
 * 
 * @export
 * @interface EmbeddedTransferTransactionDTO
 */
export interface EmbeddedTransferTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedTransferTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedTransferTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedTransferTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedTransferTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedTransferTransactionDTO
     */
    recipientAddress: string;
    /**
     * Array of mosaics sent to the recipient.
     * @type {Array<UnresolvedMosaic>}
     * @memberof EmbeddedTransferTransactionDTO
     */
    mosaics?: Array<UnresolvedMosaic>;
    /**
     * Transfer transaction message
     * @type {string}
     * @memberof EmbeddedTransferTransactionDTO
     */
    message?: string;
}

/**
 * Check if a given object implements the EmbeddedTransferTransactionDTO interface.
 */
export function instanceOfEmbeddedTransferTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "recipientAddress" in value;

    return isInstance;
}

export function EmbeddedTransferTransactionDTOFromJSON(json: any): EmbeddedTransferTransactionDTO {
    return EmbeddedTransferTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedTransferTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransferTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'recipientAddress': json['recipientAddress'],
        'mosaics': !exists(json, 'mosaics') ? undefined : ((json['mosaics'] as Array<any>).map(UnresolvedMosaicFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function EmbeddedTransferTransactionDTOToJSON(value?: EmbeddedTransferTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'recipientAddress': value.recipientAddress,
        'mosaics': value.mosaics === undefined ? undefined : ((value.mosaics as Array<any>).map(UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}

