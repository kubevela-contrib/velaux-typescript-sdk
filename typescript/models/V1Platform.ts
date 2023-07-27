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
 * @interface V1Platform
 */
export interface V1Platform {
    /**
     * 
     * @type {string}
     * @memberof V1Platform
     */
    architecture: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Platform
     */
    features?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1Platform
     */
    os: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Platform
     */
    osFeatures?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1Platform
     */
    osVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Platform
     */
    variant?: string;
}

/**
 * Check if a given object implements the V1Platform interface.
 */
export function instanceOfV1Platform(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "architecture" in value;
    isInstance = isInstance && "os" in value;

    return isInstance;
}

export function V1PlatformFromJSON(json: any): V1Platform {
    return V1PlatformFromJSONTyped(json, false);
}

export function V1PlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Platform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'architecture': json['architecture'],
        'features': !exists(json, 'features') ? undefined : json['features'],
        'os': json['os'],
        'osFeatures': !exists(json, 'os.features') ? undefined : json['os.features'],
        'osVersion': !exists(json, 'os.version') ? undefined : json['os.version'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
    };
}

export function V1PlatformToJSON(value?: V1Platform | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'architecture': value.architecture,
        'features': value.features,
        'os': value.os,
        'os.features': value.osFeatures,
        'os.version': value.osVersion,
        'variant': value.variant,
    };
}

