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
import type { AddonGitAddonSource } from './AddonGitAddonSource';
import {
    AddonGitAddonSourceFromJSON,
    AddonGitAddonSourceFromJSONTyped,
    AddonGitAddonSourceToJSON,
} from './AddonGitAddonSource';
import type { AddonGiteeAddonSource } from './AddonGiteeAddonSource';
import {
    AddonGiteeAddonSourceFromJSON,
    AddonGiteeAddonSourceFromJSONTyped,
    AddonGiteeAddonSourceToJSON,
} from './AddonGiteeAddonSource';
import type { AddonGitlabAddonSource } from './AddonGitlabAddonSource';
import {
    AddonGitlabAddonSourceFromJSON,
    AddonGitlabAddonSourceFromJSONTyped,
    AddonGitlabAddonSourceToJSON,
} from './AddonGitlabAddonSource';
import type { AddonHelmSource } from './AddonHelmSource';
import {
    AddonHelmSourceFromJSON,
    AddonHelmSourceFromJSONTyped,
    AddonHelmSourceToJSON,
} from './AddonHelmSource';
import type { AddonOSSAddonSource } from './AddonOSSAddonSource';
import {
    AddonOSSAddonSourceFromJSON,
    AddonOSSAddonSourceFromJSONTyped,
    AddonOSSAddonSourceToJSON,
} from './AddonOSSAddonSource';

/**
 * 
 * @export
 * @interface V1AddonRegistry
 */
export interface V1AddonRegistry {
    /**
     * 
     * @type {AddonGitAddonSource}
     * @memberof V1AddonRegistry
     */
    git?: AddonGitAddonSource;
    /**
     * 
     * @type {AddonGiteeAddonSource}
     * @memberof V1AddonRegistry
     */
    gitee?: AddonGiteeAddonSource;
    /**
     * 
     * @type {AddonGitlabAddonSource}
     * @memberof V1AddonRegistry
     */
    gitlab?: AddonGitlabAddonSource;
    /**
     * 
     * @type {AddonHelmSource}
     * @memberof V1AddonRegistry
     */
    helm?: AddonHelmSource;
    /**
     * 
     * @type {string}
     * @memberof V1AddonRegistry
     */
    name: string;
    /**
     * 
     * @type {AddonOSSAddonSource}
     * @memberof V1AddonRegistry
     */
    oss?: AddonOSSAddonSource;
}

/**
 * Check if a given object implements the V1AddonRegistry interface.
 */
export function instanceOfV1AddonRegistry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1AddonRegistryFromJSON(json: any): V1AddonRegistry {
    return V1AddonRegistryFromJSONTyped(json, false);
}

export function V1AddonRegistryFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AddonRegistry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'git': !exists(json, 'git') ? undefined : AddonGitAddonSourceFromJSON(json['git']),
        'gitee': !exists(json, 'gitee') ? undefined : AddonGiteeAddonSourceFromJSON(json['gitee']),
        'gitlab': !exists(json, 'gitlab') ? undefined : AddonGitlabAddonSourceFromJSON(json['gitlab']),
        'helm': !exists(json, 'helm') ? undefined : AddonHelmSourceFromJSON(json['helm']),
        'name': json['name'],
        'oss': !exists(json, 'oss') ? undefined : AddonOSSAddonSourceFromJSON(json['oss']),
    };
}

export function V1AddonRegistryToJSON(value?: V1AddonRegistry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'git': AddonGitAddonSourceToJSON(value.git),
        'gitee': AddonGiteeAddonSourceToJSON(value.gitee),
        'gitlab': AddonGitlabAddonSourceToJSON(value.gitlab),
        'helm': AddonHelmSourceToJSON(value.helm),
        'name': value.name,
        'oss': AddonOSSAddonSourceToJSON(value.oss),
    };
}
