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
 * @interface V1CreateApplicationEnvbindingRequest
 */
export interface V1CreateApplicationEnvbindingRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateApplicationEnvbindingRequest
     */
    name: string;
}

/**
 * Check if a given object implements the V1CreateApplicationEnvbindingRequest interface.
 */
export function instanceOfV1CreateApplicationEnvbindingRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1CreateApplicationEnvbindingRequestFromJSON(json: any): V1CreateApplicationEnvbindingRequest {
    return V1CreateApplicationEnvbindingRequestFromJSONTyped(json, false);
}

export function V1CreateApplicationEnvbindingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateApplicationEnvbindingRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1CreateApplicationEnvbindingRequestToJSON(value?: V1CreateApplicationEnvbindingRequest | null): any {
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

