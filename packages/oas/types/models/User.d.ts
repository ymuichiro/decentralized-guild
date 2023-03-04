/**
 * Decentralized-Guild
 * About Decentralized Guild System APIs. Please use it when expanding the system.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: ym.u.ichiro@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    name?: string;
    /**
     * base64 encoding
     * @type {string}
     * @memberof User
     */
    image?: string;
    /**
     * Symbol public key
     * @type {string}
     * @memberof User
     */
    publicKey?: string;
    /**
     * UTC. If you have already canceled your membership, only publickey will remain, so it will be undefined.
     * @type {Date}
     * @memberof User
     */
    createdAt: Date;
    /**
     * user email
     * @type {string}
     * @memberof User
     */
    email?: string;
}
/**
 * Check if a given object implements the User interface.
 */
export declare function instanceOfUser(value: object): boolean;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(value?: User | null): any;
