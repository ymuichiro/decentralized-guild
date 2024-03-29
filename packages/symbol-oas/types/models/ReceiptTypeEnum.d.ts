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
 * Type of receipt:
 * * 0x124D (4685 decimal) - Mosaic_Rental_Fee.
 * * 0x134E (4942 decimal) - Namespace_Rental_Fee.
 * * 0x2143 (8515 decimal) - Harvest_Fee.
 * * 0x2248 (8776 decimal) - LockHash_Completed.
 * * 0x2348 (9032 decimal) - LockHash_Expired.
 * * 0x2252 (8786 decimal) - LockSecret_Completed.
 * * 0x2352 (9042 decimal) - LockSecret_Expired.
 * * 0x3148 (12616 decimal) - LockHash_Created.
 * * 0x3152 (12626 decimal) - LockSecret_Created.
 * * 0x414D (16717 decimal) - Mosaic_Expired.
 * * 0x414E (16718 decimal) - Namespace_Expired.
 * * 0x424E (16974 decimal) - Namespace_Deleted.
 * * 0x5143 (20803 decimal) - Inflation.
 * * 0xE143 (57667 decimal) - Transaction_Group.
 * * 0xF143 (61763 decimal) - Address_Alias_Resolution.
 * * 0xF243 (62019 decimal) - Mosaic_Alias_Resolution.
 * @export
 */
export declare const ReceiptTypeEnum: {
    readonly NUMBER_4685: 4685;
    readonly NUMBER_4942: 4942;
    readonly NUMBER_8515: 8515;
    readonly NUMBER_8776: 8776;
    readonly NUMBER_9032: 9032;
    readonly NUMBER_8786: 8786;
    readonly NUMBER_9042: 9042;
    readonly NUMBER_12616: 12616;
    readonly NUMBER_12626: 12626;
    readonly NUMBER_16717: 16717;
    readonly NUMBER_16718: 16718;
    readonly NUMBER_16974: 16974;
    readonly NUMBER_20803: 20803;
    readonly NUMBER_57667: 57667;
    readonly NUMBER_61763: 61763;
    readonly NUMBER_62019: 62019;
};
export type ReceiptTypeEnum = (typeof ReceiptTypeEnum)[keyof typeof ReceiptTypeEnum];
export declare function ReceiptTypeEnumFromJSON(json: any): ReceiptTypeEnum;
export declare function ReceiptTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiptTypeEnum;
export declare function ReceiptTypeEnumToJSON(value?: ReceiptTypeEnum | null): any;
