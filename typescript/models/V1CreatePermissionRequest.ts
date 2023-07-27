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
 * @interface V1CreatePermissionRequest
 */
export interface V1CreatePermissionRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1CreatePermissionRequest
     */
    actions: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePermissionRequest
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePermissionRequest
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePermissionRequest
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1CreatePermissionRequest
     */
    resources: Array<string>;
}

/**
 * Check if a given object implements the V1CreatePermissionRequest interface.
 */
export function instanceOfV1CreatePermissionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "effect" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function V1CreatePermissionRequestFromJSON(json: any): V1CreatePermissionRequest {
    return V1CreatePermissionRequestFromJSONTyped(json, false);
}

export function V1CreatePermissionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreatePermissionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': json['actions'],
        'alias': json['alias'],
        'effect': json['effect'],
        'name': json['name'],
        'resources': json['resources'],
    };
}

export function V1CreatePermissionRequestToJSON(value?: V1CreatePermissionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions,
        'alias': value.alias,
        'effect': value.effect,
        'name': value.name,
        'resources': value.resources,
    };
}

