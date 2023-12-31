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
import type { CommonAppStatus } from './CommonAppStatus';
import {
    CommonAppStatusFromJSON,
    CommonAppStatusFromJSONTyped,
    CommonAppStatusToJSON,
} from './CommonAppStatus';
import type { ConfigClusterTarget } from './ConfigClusterTarget';
import {
    ConfigClusterTargetFromJSON,
    ConfigClusterTargetFromJSONTyped,
    ConfigClusterTargetToJSON,
} from './ConfigClusterTarget';
import type { ConfigNamespacedName } from './ConfigNamespacedName';
import {
    ConfigNamespacedNameFromJSON,
    ConfigNamespacedNameFromJSONTyped,
    ConfigNamespacedNameToJSON,
} from './ConfigNamespacedName';
import type { TypesNamespacedName } from './TypesNamespacedName';
import {
    TypesNamespacedNameFromJSON,
    TypesNamespacedNameFromJSONTyped,
    TypesNamespacedNameToJSON,
} from './TypesNamespacedName';

/**
 * 
 * @export
 * @interface ConfigDistribution
 */
export interface ConfigDistribution {
    /**
     * 
     * @type {TypesNamespacedName}
     * @memberof ConfigDistribution
     */
    application: TypesNamespacedName;
    /**
     * 
     * @type {Array<ConfigNamespacedName>}
     * @memberof ConfigDistribution
     */
    configs: Array<ConfigNamespacedName>;
    /**
     * 
     * @type {Date}
     * @memberof ConfigDistribution
     */
    createdTime: Date;
    /**
     * 
     * @type {string}
     * @memberof ConfigDistribution
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDistribution
     */
    namespace: string;
    /**
     * 
     * @type {CommonAppStatus}
     * @memberof ConfigDistribution
     */
    status: CommonAppStatus;
    /**
     * 
     * @type {Array<ConfigClusterTarget>}
     * @memberof ConfigDistribution
     */
    targets: Array<ConfigClusterTarget>;
}

/**
 * Check if a given object implements the ConfigDistribution interface.
 */
export function instanceOfConfigDistribution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "application" in value;
    isInstance = isInstance && "configs" in value;
    isInstance = isInstance && "createdTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "targets" in value;

    return isInstance;
}

export function ConfigDistributionFromJSON(json: any): ConfigDistribution {
    return ConfigDistributionFromJSONTyped(json, false);
}

export function ConfigDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigDistribution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'application': TypesNamespacedNameFromJSON(json['application']),
        'configs': ((json['configs'] as Array<any>).map(ConfigNamespacedNameFromJSON)),
        'createdTime': (new Date(json['createdTime'])),
        'name': json['name'],
        'namespace': json['namespace'],
        'status': CommonAppStatusFromJSON(json['status']),
        'targets': ((json['targets'] as Array<any>).map(ConfigClusterTargetFromJSON)),
    };
}

export function ConfigDistributionToJSON(value?: ConfigDistribution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'application': TypesNamespacedNameToJSON(value.application),
        'configs': ((value.configs as Array<any>).map(ConfigNamespacedNameToJSON)),
        'createdTime': (value.createdTime.toISOString()),
        'name': value.name,
        'namespace': value.namespace,
        'status': CommonAppStatusToJSON(value.status),
        'targets': ((value.targets as Array<any>).map(ConfigClusterTargetToJSON)),
    };
}

