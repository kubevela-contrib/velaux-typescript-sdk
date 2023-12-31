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
import type { V1PolicyBase } from './V1PolicyBase';
import {
    V1PolicyBaseFromJSON,
    V1PolicyBaseFromJSONTyped,
    V1PolicyBaseToJSON,
} from './V1PolicyBase';

/**
 * 
 * @export
 * @interface V1ListApplicationPolicy
 */
export interface V1ListApplicationPolicy {
    /**
     * 
     * @type {Array<V1PolicyBase>}
     * @memberof V1ListApplicationPolicy
     */
    policies: Array<V1PolicyBase>;
}

/**
 * Check if a given object implements the V1ListApplicationPolicy interface.
 */
export function instanceOfV1ListApplicationPolicy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policies" in value;

    return isInstance;
}

export function V1ListApplicationPolicyFromJSON(json: any): V1ListApplicationPolicy {
    return V1ListApplicationPolicyFromJSONTyped(json, false);
}

export function V1ListApplicationPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListApplicationPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policies': ((json['policies'] as Array<any>).map(V1PolicyBaseFromJSON)),
    };
}

export function V1ListApplicationPolicyToJSON(value?: V1ListApplicationPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'policies': ((value.policies as Array<any>).map(V1PolicyBaseToJSON)),
    };
}

