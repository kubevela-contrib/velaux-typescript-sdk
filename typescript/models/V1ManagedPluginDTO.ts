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
import type { TypesIncludes } from './TypesIncludes';
import {
    TypesIncludesFromJSON,
    TypesIncludesFromJSONTyped,
    TypesIncludesToJSON,
} from './TypesIncludes';
import type { TypesInfo } from './TypesInfo';
import {
    TypesInfoFromJSON,
    TypesInfoFromJSONTyped,
    TypesInfoToJSON,
} from './TypesInfo';
import type { TypesKubernetesSecret } from './TypesKubernetesSecret';
import {
    TypesKubernetesSecretFromJSON,
    TypesKubernetesSecretFromJSONTyped,
    TypesKubernetesSecretToJSON,
} from './TypesKubernetesSecret';
import type { TypesKubernetesService } from './TypesKubernetesService';
import {
    TypesKubernetesServiceFromJSON,
    TypesKubernetesServiceFromJSONTyped,
    TypesKubernetesServiceToJSON,
} from './TypesKubernetesService';
import type { TypesRequirement } from './TypesRequirement';
import {
    TypesRequirementFromJSON,
    TypesRequirementFromJSONTyped,
    TypesRequirementToJSON,
} from './TypesRequirement';
import type { TypesRoute } from './TypesRoute';
import {
    TypesRouteFromJSON,
    TypesRouteFromJSONTyped,
    TypesRouteToJSON,
} from './TypesRoute';
import type { V1PolicyRule } from './V1PolicyRule';
import {
    V1PolicyRuleFromJSON,
    V1PolicyRuleFromJSONTyped,
    V1PolicyRuleToJSON,
} from './V1PolicyRule';

/**
 * 
 * @export
 * @interface V1ManagedPluginDTO
 */
export interface V1ManagedPluginDTO {
    /**
     * 
     * @type {TypesKubernetesSecret}
     * @memberof V1ManagedPluginDTO
     */
    authSecret?: TypesKubernetesSecret;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    authType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1ManagedPluginDTO
     */
    backend: boolean;
    /**
     * 
     * @type {TypesKubernetesService}
     * @memberof V1ManagedPluginDTO
     */
    backendService: TypesKubernetesService;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    backendType: string;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    baseURL: string;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    _class: string;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    defaultNavURL: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1ManagedPluginDTO
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    id: string;
    /**
     * 
     * @type {Array<TypesIncludes>}
     * @memberof V1ManagedPluginDTO
     */
    includes: Array<TypesIncludes>;
    /**
     * 
     * @type {TypesInfo}
     * @memberof V1ManagedPluginDTO
     */
    info: TypesInfo;
    /**
     * 
     * @type {object}
     * @memberof V1ManagedPluginDTO
     */
    jsonSetting: object;
    /**
     * 
     * @type {Array<V1PolicyRule>}
     * @memberof V1ManagedPluginDTO
     */
    kubePermissions?: Array<V1PolicyRule>;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    module: string;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1ManagedPluginDTO
     */
    proxy: boolean;
    /**
     * 
     * @type {TypesRequirement}
     * @memberof V1ManagedPluginDTO
     */
    requirement?: TypesRequirement;
    /**
     * 
     * @type {Array<TypesRoute>}
     * @memberof V1ManagedPluginDTO
     */
    routes?: Array<TypesRoute>;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof V1ManagedPluginDTO
     */
    secureJsonFields: { [key: string]: boolean; };
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    subType: string;
    /**
     * 
     * @type {string}
     * @memberof V1ManagedPluginDTO
     */
    type: string;
}

/**
 * Check if a given object implements the V1ManagedPluginDTO interface.
 */
export function instanceOfV1ManagedPluginDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "backend" in value;
    isInstance = isInstance && "backendService" in value;
    isInstance = isInstance && "backendType" in value;
    isInstance = isInstance && "baseURL" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "_class" in value;
    isInstance = isInstance && "defaultNavURL" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "includes" in value;
    isInstance = isInstance && "info" in value;
    isInstance = isInstance && "jsonSetting" in value;
    isInstance = isInstance && "module" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "proxy" in value;
    isInstance = isInstance && "secureJsonFields" in value;
    isInstance = isInstance && "subType" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1ManagedPluginDTOFromJSON(json: any): V1ManagedPluginDTO {
    return V1ManagedPluginDTOFromJSONTyped(json, false);
}

export function V1ManagedPluginDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ManagedPluginDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authSecret': !exists(json, 'authSecret') ? undefined : TypesKubernetesSecretFromJSON(json['authSecret']),
        'authType': !exists(json, 'authType') ? undefined : json['authType'],
        'backend': json['backend'],
        'backendService': TypesKubernetesServiceFromJSON(json['backendService']),
        'backendType': json['backendType'],
        'baseURL': json['baseURL'],
        'category': json['category'],
        '_class': json['class'],
        'defaultNavURL': json['defaultNavURL'],
        'enabled': json['enabled'],
        'id': json['id'],
        'includes': ((json['includes'] as Array<any>).map(TypesIncludesFromJSON)),
        'info': TypesInfoFromJSON(json['info']),
        'jsonSetting': json['jsonSetting'],
        'kubePermissions': !exists(json, 'kubePermissions') ? undefined : ((json['kubePermissions'] as Array<any>).map(V1PolicyRuleFromJSON)),
        'module': json['module'],
        'name': json['name'],
        'proxy': json['proxy'],
        'requirement': !exists(json, 'requirement') ? undefined : TypesRequirementFromJSON(json['requirement']),
        'routes': !exists(json, 'routes') ? undefined : ((json['routes'] as Array<any>).map(TypesRouteFromJSON)),
        'secureJsonFields': json['secureJsonFields'],
        'subType': json['subType'],
        'type': json['type'],
    };
}

export function V1ManagedPluginDTOToJSON(value?: V1ManagedPluginDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authSecret': TypesKubernetesSecretToJSON(value.authSecret),
        'authType': value.authType,
        'backend': value.backend,
        'backendService': TypesKubernetesServiceToJSON(value.backendService),
        'backendType': value.backendType,
        'baseURL': value.baseURL,
        'category': value.category,
        'class': value._class,
        'defaultNavURL': value.defaultNavURL,
        'enabled': value.enabled,
        'id': value.id,
        'includes': ((value.includes as Array<any>).map(TypesIncludesToJSON)),
        'info': TypesInfoToJSON(value.info),
        'jsonSetting': value.jsonSetting,
        'kubePermissions': value.kubePermissions === undefined ? undefined : ((value.kubePermissions as Array<any>).map(V1PolicyRuleToJSON)),
        'module': value.module,
        'name': value.name,
        'proxy': value.proxy,
        'requirement': TypesRequirementToJSON(value.requirement),
        'routes': value.routes === undefined ? undefined : ((value.routes as Array<any>).map(TypesRouteToJSON)),
        'secureJsonFields': value.secureJsonFields,
        'subType': value.subType,
        'type': value.type,
    };
}

