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
 * @interface V1ApplicationTrait
 */
export interface V1ApplicationTrait {
    /**
     * 
     * @type {string}
     * @memberof V1ApplicationTrait
     */
    alias?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1ApplicationTrait
     */
    createTime: Date;
    /**
     * 
     * @type {string}
     * @memberof V1ApplicationTrait
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof V1ApplicationTrait
     */
    properties: object;
    /**
     * 
     * @type {string}
     * @memberof V1ApplicationTrait
     */
    type: string;
    /**
     * 
     * @type {Date}
     * @memberof V1ApplicationTrait
     */
    updateTime: Date;
}

/**
 * Check if a given object implements the V1ApplicationTrait interface.
 */
export function instanceOfV1ApplicationTrait(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createTime" in value;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updateTime" in value;

    return isInstance;
}

export function V1ApplicationTraitFromJSON(json: any): V1ApplicationTrait {
    return V1ApplicationTraitFromJSONTyped(json, false);
}

export function V1ApplicationTraitFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ApplicationTrait {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'createTime': (new Date(json['createTime'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'properties': json['properties'],
        'type': json['type'],
        'updateTime': (new Date(json['updateTime'])),
    };
}

export function V1ApplicationTraitToJSON(value?: V1ApplicationTrait | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'createTime': (value.createTime.toISOString()),
        'description': value.description,
        'properties': value.properties,
        'type': value.type,
        'updateTime': (value.updateTime.toISOString()),
    };
}

