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
import type { MosaicDTO } from './MosaicDTO';
/**
 *
 * @export
 * @interface MosaicInfoDTO
 */
export interface MosaicInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof MosaicInfoDTO
     */
    id: string;
    /**
     *
     * @type {MosaicDTO}
     * @memberof MosaicInfoDTO
     */
    mosaic: MosaicDTO;
}
/**
 * Check if a given object implements the MosaicInfoDTO interface.
 */
export declare function instanceOfMosaicInfoDTO(value: object): boolean;
export declare function MosaicInfoDTOFromJSON(json: any): MosaicInfoDTO;
export declare function MosaicInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicInfoDTO;
export declare function MosaicInfoDTOToJSON(value?: MosaicInfoDTO | null): any;
