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
 * @interface V1UpdateConfigRequest
 */
export interface V1UpdateConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateConfigRequest
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateConfigRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateConfigRequest
     */
    properties?: string;
}

/**
 * Check if a given object implements the V1UpdateConfigRequest interface.
 */
export function instanceOfV1UpdateConfigRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function V1UpdateConfigRequestFromJSON(json: any): V1UpdateConfigRequest {
    return V1UpdateConfigRequestFromJSONTyped(json, false);
}

export function V1UpdateConfigRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UpdateConfigRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'description': json['description'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}

export function V1UpdateConfigRequestToJSON(value?: V1UpdateConfigRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'description': value.description,
        'properties': value.properties,
    };
}
