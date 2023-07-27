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
import type { V1ClusterTarget } from './V1ClusterTarget';
import {
    V1ClusterTargetFromJSON,
    V1ClusterTargetFromJSONTyped,
    V1ClusterTargetToJSON,
} from './V1ClusterTarget';
import type { V1NamespacedName } from './V1NamespacedName';
import {
    V1NamespacedNameFromJSON,
    V1NamespacedNameFromJSONTyped,
    V1NamespacedNameToJSON,
} from './V1NamespacedName';

/**
 * 
 * @export
 * @interface V1CreateConfigDistributionRequest
 */
export interface V1CreateConfigDistributionRequest {
    /**
     * 
     * @type {Array<V1NamespacedName>}
     * @memberof V1CreateConfigDistributionRequest
     */
    configs: Array<V1NamespacedName>;
    /**
     * 
     * @type {string}
     * @memberof V1CreateConfigDistributionRequest
     */
    name: string;
    /**
     * 
     * @type {Array<V1ClusterTarget>}
     * @memberof V1CreateConfigDistributionRequest
     */
    targets: Array<V1ClusterTarget>;
}

/**
 * Check if a given object implements the V1CreateConfigDistributionRequest interface.
 */
export function instanceOfV1CreateConfigDistributionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "configs" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "targets" in value;

    return isInstance;
}

export function V1CreateConfigDistributionRequestFromJSON(json: any): V1CreateConfigDistributionRequest {
    return V1CreateConfigDistributionRequestFromJSONTyped(json, false);
}

export function V1CreateConfigDistributionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateConfigDistributionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configs': ((json['configs'] as Array<any>).map(V1NamespacedNameFromJSON)),
        'name': json['name'],
        'targets': ((json['targets'] as Array<any>).map(V1ClusterTargetFromJSON)),
    };
}

export function V1CreateConfigDistributionRequestToJSON(value?: V1CreateConfigDistributionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configs': ((value.configs as Array<any>).map(V1NamespacedNameToJSON)),
        'name': value.name,
        'targets': ((value.targets as Array<any>).map(V1ClusterTargetToJSON)),
    };
}
