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
 * @interface NamespaceNameDTO
 */
export interface NamespaceNameDTO {
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceNameDTO
     */
    parentId?: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceNameDTO
     */
    id: string;
    /**
     * Namespace name.
     * @type {string}
     * @memberof NamespaceNameDTO
     */
    name: string;
}
/**
 * Check if a given object implements the NamespaceNameDTO interface.
 */
export declare function instanceOfNamespaceNameDTO(value: object): boolean;
export declare function NamespaceNameDTOFromJSON(json: any): NamespaceNameDTO;
export declare function NamespaceNameDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceNameDTO;
export declare function NamespaceNameDTOToJSON(value?: NamespaceNameDTO | null): any;
