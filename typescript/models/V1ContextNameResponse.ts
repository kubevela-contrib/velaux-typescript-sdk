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
 * @interface V1ContextNameResponse
 */
export interface V1ContextNameResponse {
    /**
     * 
     * @type {string}
     * @memberof V1ContextNameResponse
     */
    name: string;
}

/**
 * Check if a given object implements the V1ContextNameResponse interface.
 */
export function instanceOfV1ContextNameResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1ContextNameResponseFromJSON(json: any): V1ContextNameResponse {
    return V1ContextNameResponseFromJSONTyped(json, false);
}

export function V1ContextNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContextNameResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1ContextNameResponseToJSON(value?: V1ContextNameResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

