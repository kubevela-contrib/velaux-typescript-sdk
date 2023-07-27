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
 * @interface V1AdminConfiguredResponse
 */
export interface V1AdminConfiguredResponse {
    /**
     * 
     * @type {boolean}
     * @memberof V1AdminConfiguredResponse
     */
    configured: boolean;
}

/**
 * Check if a given object implements the V1AdminConfiguredResponse interface.
 */
export function instanceOfV1AdminConfiguredResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "configured" in value;

    return isInstance;
}

export function V1AdminConfiguredResponseFromJSON(json: any): V1AdminConfiguredResponse {
    return V1AdminConfiguredResponseFromJSONTyped(json, false);
}

export function V1AdminConfiguredResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AdminConfiguredResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configured': json['configured'],
    };
}

export function V1AdminConfiguredResponseToJSON(value?: V1AdminConfiguredResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configured': value.configured,
    };
}
