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
import type { ConfigDistribution } from './ConfigDistribution';
import {
    ConfigDistributionFromJSON,
    ConfigDistributionFromJSONTyped,
    ConfigDistributionToJSON,
} from './ConfigDistribution';

/**
 * 
 * @export
 * @interface V1ListConfigDistributionResponse
 */
export interface V1ListConfigDistributionResponse {
    /**
     * 
     * @type {Array<ConfigDistribution>}
     * @memberof V1ListConfigDistributionResponse
     */
    distributions: Array<ConfigDistribution>;
}

/**
 * Check if a given object implements the V1ListConfigDistributionResponse interface.
 */
export function instanceOfV1ListConfigDistributionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "distributions" in value;

    return isInstance;
}

export function V1ListConfigDistributionResponseFromJSON(json: any): V1ListConfigDistributionResponse {
    return V1ListConfigDistributionResponseFromJSONTyped(json, false);
}

export function V1ListConfigDistributionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListConfigDistributionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'distributions': ((json['distributions'] as Array<any>).map(ConfigDistributionFromJSON)),
    };
}

export function V1ListConfigDistributionResponseToJSON(value?: V1ListConfigDistributionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'distributions': ((value.distributions as Array<any>).map(ConfigDistributionToJSON)),
    };
}

