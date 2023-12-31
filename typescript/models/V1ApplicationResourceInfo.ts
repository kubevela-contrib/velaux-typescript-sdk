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
 * @interface V1ApplicationResourceInfo
 */
export interface V1ApplicationResourceInfo {
    /**
     * 
     * @type {number}
     * @memberof V1ApplicationResourceInfo
     */
    componentNum: number;
}

/**
 * Check if a given object implements the V1ApplicationResourceInfo interface.
 */
export function instanceOfV1ApplicationResourceInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "componentNum" in value;

    return isInstance;
}

export function V1ApplicationResourceInfoFromJSON(json: any): V1ApplicationResourceInfo {
    return V1ApplicationResourceInfoFromJSONTyped(json, false);
}

export function V1ApplicationResourceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ApplicationResourceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'componentNum': json['componentNum'],
    };
}

export function V1ApplicationResourceInfoToJSON(value?: V1ApplicationResourceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'componentNum': value.componentNum,
    };
}

