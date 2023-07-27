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
 * @interface V1HealthConfig
 */
export interface V1HealthConfig {
    /**
     * 
     * @type {number}
     * @memberof V1HealthConfig
     */
    interval?: number;
    /**
     * 
     * @type {number}
     * @memberof V1HealthConfig
     */
    retries?: number;
    /**
     * 
     * @type {number}
     * @memberof V1HealthConfig
     */
    startPeriod?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1HealthConfig
     */
    test?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof V1HealthConfig
     */
    timeout?: number;
}

/**
 * Check if a given object implements the V1HealthConfig interface.
 */
export function instanceOfV1HealthConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HealthConfigFromJSON(json: any): V1HealthConfig {
    return V1HealthConfigFromJSONTyped(json, false);
}

export function V1HealthConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HealthConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'interval': !exists(json, 'Interval') ? undefined : json['Interval'],
        'retries': !exists(json, 'Retries') ? undefined : json['Retries'],
        'startPeriod': !exists(json, 'StartPeriod') ? undefined : json['StartPeriod'],
        'test': !exists(json, 'Test') ? undefined : json['Test'],
        'timeout': !exists(json, 'Timeout') ? undefined : json['Timeout'],
    };
}

export function V1HealthConfigToJSON(value?: V1HealthConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Interval': value.interval,
        'Retries': value.retries,
        'StartPeriod': value.startPeriod,
        'Test': value.test,
        'Timeout': value.timeout,
    };
}

