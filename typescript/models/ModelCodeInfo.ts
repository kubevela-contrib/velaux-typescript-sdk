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
 * @interface ModelCodeInfo
 */
export interface ModelCodeInfo {
    /**
     * 
     * @type {string}
     * @memberof ModelCodeInfo
     */
    branch?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCodeInfo
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCodeInfo
     */
    user?: string;
}

/**
 * Check if a given object implements the ModelCodeInfo interface.
 */
export function instanceOfModelCodeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelCodeInfoFromJSON(json: any): ModelCodeInfo {
    return ModelCodeInfoFromJSONTyped(json, false);
}

export function ModelCodeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCodeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function ModelCodeInfoToJSON(value?: ModelCodeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'commit': value.commit,
        'user': value.user,
    };
}
