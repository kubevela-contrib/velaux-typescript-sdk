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
import type { V1NameAlias } from './V1NameAlias';
import {
    V1NameAliasFromJSON,
    V1NameAliasFromJSONTyped,
    V1NameAliasToJSON,
} from './V1NameAlias';
import type { V1UserProjectBase } from './V1UserProjectBase';
import {
    V1UserProjectBaseFromJSON,
    V1UserProjectBaseFromJSONTyped,
    V1UserProjectBaseToJSON,
} from './V1UserProjectBase';

/**
 * 
 * @export
 * @interface V1DetailUserResponse
 */
export interface V1DetailUserResponse {
    /**
     * 
     * @type {string}
     * @memberof V1DetailUserResponse
     */
    alias?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1DetailUserResponse
     */
    createTime: Date;
    /**
     * 
     * @type {boolean}
     * @memberof V1DetailUserResponse
     */
    disabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1DetailUserResponse
     */
    email: string;
    /**
     * 
     * @type {Date}
     * @memberof V1DetailUserResponse
     */
    lastLoginTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1DetailUserResponse
     */
    name: string;
    /**
     * 
     * @type {Array<V1UserProjectBase>}
     * @memberof V1DetailUserResponse
     */
    projects: Array<V1UserProjectBase>;
    /**
     * 
     * @type {Array<V1NameAlias>}
     * @memberof V1DetailUserResponse
     */
    roles: Array<V1NameAlias>;
}

/**
 * Check if a given object implements the V1DetailUserResponse interface.
 */
export function instanceOfV1DetailUserResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "disabled" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "lastLoginTime" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "projects" in value;
    isInstance = isInstance && "roles" in value;

    return isInstance;
}

export function V1DetailUserResponseFromJSON(json: any): V1DetailUserResponse {
    return V1DetailUserResponseFromJSONTyped(json, false);
}

export function V1DetailUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DetailUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'createTime': (new Date(json['createTime'])),
        'disabled': json['disabled'],
        'email': json['email'],
        'lastLoginTime': (new Date(json['lastLoginTime'])),
        'name': json['name'],
        'projects': ((json['projects'] as Array<any>).map(V1UserProjectBaseFromJSON)),
        'roles': ((json['roles'] as Array<any>).map(V1NameAliasFromJSON)),
    };
}

export function V1DetailUserResponseToJSON(value?: V1DetailUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'disabled': value.disabled,
        'email': value.email,
        'lastLoginTime': (value.lastLoginTime.toISOString()),
        'name': value.name,
        'projects': ((value.projects as Array<any>).map(V1UserProjectBaseToJSON)),
        'roles': ((value.roles as Array<any>).map(V1NameAliasToJSON)),
    };
}

