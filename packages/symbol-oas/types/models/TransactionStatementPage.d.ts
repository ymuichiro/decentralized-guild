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
import type { Pagination } from './Pagination';
import type { TransactionStatementInfoDTO } from './TransactionStatementInfoDTO';
/**
 *
 * @export
 * @interface TransactionStatementPage
 */
export interface TransactionStatementPage {
    /**
     * Array of transaction statements.
     * @type {Array<TransactionStatementInfoDTO>}
     * @memberof TransactionStatementPage
     */
    data: Array<TransactionStatementInfoDTO>;
    /**
     *
     * @type {Pagination}
     * @memberof TransactionStatementPage
     */
    pagination: Pagination;
}
/**
 * Check if a given object implements the TransactionStatementPage interface.
 */
export declare function instanceOfTransactionStatementPage(value: object): boolean;
export declare function TransactionStatementPageFromJSON(json: any): TransactionStatementPage;
export declare function TransactionStatementPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementPage;
export declare function TransactionStatementPageToJSON(value?: TransactionStatementPage | null): any;
