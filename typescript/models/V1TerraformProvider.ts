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
 * @interface V1TerraformProvider
 */
export interface V1TerraformProvider {
    /**
     * 
     * @type {Date}
     * @memberof V1TerraformProvider
     */
    createTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1TerraformProvider
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1TerraformProvider
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof V1TerraformProvider
     */
    region: string;
}

/**
 * Check if a given object implements the V1TerraformProvider interface.
 */
export function instanceOfV1TerraformProvider(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "provider" in value;
    isInstance = isInstance && "region" in value;

    return isInstance;
}

export function V1TerraformProviderFromJSON(json: any): V1TerraformProvider {
    return V1TerraformProviderFromJSONTyped(json, false);
}

export function V1TerraformProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TerraformProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createTime': (new Date(json['createTime'])),
        'name': json['name'],
        'provider': json['provider'],
        'region': json['region'],
    };
}

export function V1TerraformProviderToJSON(value?: V1TerraformProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createTime': (value.createTime.toISOString()),
        'name': value.name,
        'provider': value.provider,
        'region': value.region,
    };
}

