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
 * @interface Pagination
 */
export interface Pagination {
    /**
     *
     * @type {number}
     * @memberof Pagination
     */
    pageNumber: number;
    /**
     *
     * @type {number}
     * @memberof Pagination
     */
    pageSize: number;
}
/**
 * Check if a given object implements the Pagination interface.
 */
export declare function instanceOfPagination(value: object): boolean;
export declare function PaginationFromJSON(json: any): Pagination;
export declare function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination;
export declare function PaginationToJSON(value?: Pagination | null): any;
