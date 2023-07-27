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
import type { V1EnvBindingBase } from './V1EnvBindingBase';
import {
    V1EnvBindingBaseFromJSON,
    V1EnvBindingBaseFromJSONTyped,
    V1EnvBindingBaseToJSON,
} from './V1EnvBindingBase';

/**
 * 
 * @export
 * @interface V1ListApplicationEnvBinding
 */
export interface V1ListApplicationEnvBinding {
    /**
     * 
     * @type {Array<V1EnvBindingBase>}
     * @memberof V1ListApplicationEnvBinding
     */
    envBindings: Array<V1EnvBindingBase>;
}

/**
 * Check if a given object implements the V1ListApplicationEnvBinding interface.
 */
export function instanceOfV1ListApplicationEnvBinding(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "envBindings" in value;

    return isInstance;
}

export function V1ListApplicationEnvBindingFromJSON(json: any): V1ListApplicationEnvBinding {
    return V1ListApplicationEnvBindingFromJSONTyped(json, false);
}

export function V1ListApplicationEnvBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListApplicationEnvBinding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'envBindings': ((json['envBindings'] as Array<any>).map(V1EnvBindingBaseFromJSON)),
    };
}

export function V1ListApplicationEnvBindingToJSON(value?: V1ListApplicationEnvBinding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'envBindings': ((value.envBindings as Array<any>).map(V1EnvBindingBaseToJSON)),
    };
}
