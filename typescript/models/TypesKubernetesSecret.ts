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
 * @interface TypesKubernetesSecret
 */
export interface TypesKubernetesSecret {
    /**
     * 
     * @type {string}
     * @memberof TypesKubernetesSecret
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TypesKubernetesSecret
     */
    namespace: string;
}

/**
 * Check if a given object implements the TypesKubernetesSecret interface.
 */
export function instanceOfTypesKubernetesSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;

    return isInstance;
}

export function TypesKubernetesSecretFromJSON(json: any): TypesKubernetesSecret {
    return TypesKubernetesSecretFromJSONTyped(json, false);
}

export function TypesKubernetesSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesKubernetesSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function TypesKubernetesSecretToJSON(value?: TypesKubernetesSecret | null): any {
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

