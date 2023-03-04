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
/**
 * 
 * @export
 * @interface MetadataNetworkPropertiesDTO
 */
export interface MetadataNetworkPropertiesDTO {
    /**
     * Maximum metadata value size.
     * @type {string}
     * @memberof MetadataNetworkPropertiesDTO
     */
    maxValueSize?: string;
}

/**
 * Check if a given object implements the MetadataNetworkPropertiesDTO interface.
 */
export function instanceOfMetadataNetworkPropertiesDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetadataNetworkPropertiesDTOFromJSON(json: any): MetadataNetworkPropertiesDTO {
    return MetadataNetworkPropertiesDTOFromJSONTyped(json, false);
}

export function MetadataNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataNetworkPropertiesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxValueSize': !exists(json, 'maxValueSize') ? undefined : json['maxValueSize'],
    };
}

export function MetadataNetworkPropertiesDTOToJSON(value?: MetadataNetworkPropertiesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxValueSize': value.maxValueSize,
    };
}

