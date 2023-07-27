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
 * @interface TypesHeader
 */
export interface TypesHeader {
    /**
     * 
     * @type {string}
     * @memberof TypesHeader
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TypesHeader
     */
    value: string;
}

/**
 * Check if a given object implements the TypesHeader interface.
 */
export function instanceOfTypesHeader(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function TypesHeaderFromJSON(json: any): TypesHeader {
    return TypesHeaderFromJSONTyped(json, false);
}

export function TypesHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function TypesHeaderToJSON(value?: TypesHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

