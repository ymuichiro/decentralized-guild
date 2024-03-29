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
import type { BmTreeSignature } from './BmTreeSignature';
import type { StageEnum } from './StageEnum';
/**
 *
 * @export
 * @interface MessageGroup
 */
export interface MessageGroup {
    /**
     *
     * @type {StageEnum}
     * @memberof MessageGroup
     */
    stage: StageEnum;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof MessageGroup
     */
    height: string;
    /**
     *
     * @type {Array<string>}
     * @memberof MessageGroup
     */
    hashes: Array<string>;
    /**
     *
     * @type {Array<BmTreeSignature>}
     * @memberof MessageGroup
     */
    signatures: Array<BmTreeSignature>;
}
/**
 * Check if a given object implements the MessageGroup interface.
 */
export declare function instanceOfMessageGroup(value: object): boolean;
export declare function MessageGroupFromJSON(json: any): MessageGroup;
export declare function MessageGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageGroup;
export declare function MessageGroupToJSON(value?: MessageGroup | null): any;
