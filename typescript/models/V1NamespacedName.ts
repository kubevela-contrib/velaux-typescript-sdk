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
 * @interface V1NamespacedName
 */
export interface V1NamespacedName {
    /**
     * 
     * @type {string}
     * @memberof V1NamespacedName
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V1NamespacedName
     */
    namespace?: string;
}

/**
 * Check if a given object implements the V1NamespacedName interface.
 */
export function instanceOfV1NamespacedName(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1NamespacedNameFromJSON(json: any): V1NamespacedName {
    return V1NamespacedNameFromJSONTyped(json, false);
}

export function V1NamespacedNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NamespacedName {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1NamespacedNameToJSON(value?: V1NamespacedName | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
    };
}
