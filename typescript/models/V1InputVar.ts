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
 * @interface V1InputVar
 */
export interface V1InputVar {
    /**
     * 
     * @type {string}
     * @memberof V1InputVar
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof V1InputVar
     */
    fromStep: string;
    /**
     * 
     * @type {string}
     * @memberof V1InputVar
     */
    parameterKey: string;
    /**
     * 
     * @type {string}
     * @memberof V1InputVar
     */
    value: string;
}

/**
 * Check if a given object implements the V1InputVar interface.
 */
export function instanceOfV1InputVar(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "fromStep" in value;
    isInstance = isInstance && "parameterKey" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function V1InputVarFromJSON(json: any): V1InputVar {
    return V1InputVarFromJSONTyped(json, false);
}

export function V1InputVarFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1InputVar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': json['from'],
        'fromStep': json['fromStep'],
        'parameterKey': json['parameterKey'],
        'value': json['value'],
    };
}

export function V1InputVarToJSON(value?: V1InputVar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'fromStep': value.fromStep,
        'parameterKey': value.parameterKey,
        'value': value.value,
    };
}

