/* tslint:disable */
/* eslint-disable */
/**
 * Kubevela api doc
 * Kubevela api doc
 *
 * The version of the OpenAPI document: v1beta1
 * Contact: feedback@mail.kubevela.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CommonStatus
 */
export interface CommonStatus {
    /**
     * 
     * @type {string}
     * @memberof CommonStatus
     */
    customStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonStatus
     */
    healthPolicy?: string;
}

/**
 * Check if a given object implements the CommonStatus interface.
 */
export function instanceOfCommonStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommonStatusFromJSON(json: any): CommonStatus {
    return CommonStatusFromJSONTyped(json, false);
}

export function CommonStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customStatus': !exists(json, 'customStatus') ? undefined : json['customStatus'],
        'healthPolicy': !exists(json, 'healthPolicy') ? undefined : json['healthPolicy'],
    };
}

export function CommonStatusToJSON(value?: CommonStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customStatus': value.customStatus,
        'healthPolicy': value.healthPolicy,
    };
}
