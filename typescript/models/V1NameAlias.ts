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
 * @interface V1NameAlias
 */
export interface V1NameAlias {
    /**
     * 
     * @type {string}
     * @memberof V1NameAlias
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof V1NameAlias
     */
    name: string;
}

/**
 * Check if a given object implements the V1NameAlias interface.
 */
export function instanceOfV1NameAlias(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1NameAliasFromJSON(json: any): V1NameAlias {
    return V1NameAliasFromJSONTyped(json, false);
}

export function V1NameAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NameAlias {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'name': json['name'],
    };
}

export function V1NameAliasToJSON(value?: V1NameAlias | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'name': value.name,
    };
}

