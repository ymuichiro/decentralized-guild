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
 * @interface Mosaic
 */
export interface Mosaic {
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof Mosaic
     */
    id: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof Mosaic
     */
    amount: string;
}
/**
 * Check if a given object implements the Mosaic interface.
 */
export declare function instanceOfMosaic(value: object): boolean;
export declare function MosaicFromJSON(json: any): Mosaic;
export declare function MosaicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mosaic;
export declare function MosaicToJSON(value?: Mosaic | null): any;
