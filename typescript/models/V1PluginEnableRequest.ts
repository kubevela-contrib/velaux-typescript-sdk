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
 * @interface V1PluginEnableRequest
 */
export interface V1PluginEnableRequest {
    /**
     * 
     * @type {object}
     * @memberof V1PluginEnableRequest
     */
    jsonData: object;
    /**
     * 
     * @type {object}
     * @memberof V1PluginEnableRequest
     */
    secureJsonData: object;
}

/**
 * Check if a given object implements the V1PluginEnableRequest interface.
 */
export function instanceOfV1PluginEnableRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jsonData" in value;
    isInstance = isInstance && "secureJsonData" in value;

    return isInstance;
}

export function V1PluginEnableRequestFromJSON(json: any): V1PluginEnableRequest {
    return V1PluginEnableRequestFromJSONTyped(json, false);
}

export function V1PluginEnableRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PluginEnableRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jsonData': json['jsonData'],
        'secureJsonData': json['secureJsonData'],
    };
}

export function V1PluginEnableRequestToJSON(value?: V1PluginEnableRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jsonData': value.jsonData,
        'secureJsonData': value.secureJsonData,
    };
}
