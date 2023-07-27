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
import type { ModelProjectRef } from './ModelProjectRef';
import {
    ModelProjectRefFromJSON,
    ModelProjectRefFromJSONTyped,
    ModelProjectRefToJSON,
} from './ModelProjectRef';

/**
 * 
 * @export
 * @interface V1SystemInfo
 */
export interface V1SystemInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1SystemInfo
     */
    dexUserDefaultPlatformRoles?: Array<string>;
    /**
     * 
     * @type {Array<ModelProjectRef>}
     * @memberof V1SystemInfo
     */
    dexUserDefaultProjects?: Array<ModelProjectRef>;
    /**
     * 
     * @type {boolean}
     * @memberof V1SystemInfo
     */
    enableCollection: boolean;
    /**
     * 
     * @type {Date}
     * @memberof V1SystemInfo
     */
    installTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1SystemInfo
     */
    loginType: string;
    /**
     * 
     * @type {string}
     * @memberof V1SystemInfo
     */
    platformID: string;
}

/**
 * Check if a given object implements the V1SystemInfo interface.
 */
export function instanceOfV1SystemInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "enableCollection" in value;
    isInstance = isInstance && "loginType" in value;
    isInstance = isInstance && "platformID" in value;

    return isInstance;
}

export function V1SystemInfoFromJSON(json: any): V1SystemInfo {
    return V1SystemInfoFromJSONTyped(json, false);
}

export function V1SystemInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SystemInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dexUserDefaultPlatformRoles': !exists(json, 'dexUserDefaultPlatformRoles') ? undefined : json['dexUserDefaultPlatformRoles'],
        'dexUserDefaultProjects': !exists(json, 'dexUserDefaultProjects') ? undefined : ((json['dexUserDefaultProjects'] as Array<any>).map(ModelProjectRefFromJSON)),
        'enableCollection': json['enableCollection'],
        'installTime': !exists(json, 'installTime') ? undefined : (new Date(json['installTime'])),
        'loginType': json['loginType'],
        'platformID': json['platformID'],
    };
}

export function V1SystemInfoToJSON(value?: V1SystemInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dexUserDefaultPlatformRoles': value.dexUserDefaultPlatformRoles,
        'dexUserDefaultProjects': value.dexUserDefaultProjects === undefined ? undefined : ((value.dexUserDefaultProjects as Array<any>).map(ModelProjectRefToJSON)),
        'enableCollection': value.enableCollection,
        'installTime': value.installTime === undefined ? undefined : (value.installTime.toISOString()),
        'loginType': value.loginType,
        'platformID': value.platformID,
    };
}

