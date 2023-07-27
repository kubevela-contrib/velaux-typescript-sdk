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
 * @interface V1EnableAddonRequest
 */
export interface V1EnableAddonRequest {
    /**
     * 
     * @type {object}
     * @memberof V1EnableAddonRequest
     */
    args?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1EnableAddonRequest
     */
    clusters?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1EnableAddonRequest
     */
    registryName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EnableAddonRequest
     */
    version?: string;
}

/**
 * Check if a given object implements the V1EnableAddonRequest interface.
 */
export function instanceOfV1EnableAddonRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EnableAddonRequestFromJSON(json: any): V1EnableAddonRequest {
    return V1EnableAddonRequestFromJSONTyped(json, false);
}

export function V1EnableAddonRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EnableAddonRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'args': !exists(json, 'args') ? undefined : json['args'],
        'clusters': !exists(json, 'clusters') ? undefined : json['clusters'],
        'registryName': !exists(json, 'registryName') ? undefined : json['registryName'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function V1EnableAddonRequestToJSON(value?: V1EnableAddonRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'args': value.args,
        'clusters': value.clusters,
        'registryName': value.registryName,
        'version': value.version,
    };
}
