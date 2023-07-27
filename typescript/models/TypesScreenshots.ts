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
 * @interface TypesScreenshots
 */
export interface TypesScreenshots {
    /**
     * 
     * @type {string}
     * @memberof TypesScreenshots
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TypesScreenshots
     */
    path: string;
}

/**
 * Check if a given object implements the TypesScreenshots interface.
 */
export function instanceOfTypesScreenshots(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function TypesScreenshotsFromJSON(json: any): TypesScreenshots {
    return TypesScreenshotsFromJSONTyped(json, false);
}

export function TypesScreenshotsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesScreenshots {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': json['path'],
    };
}

export function TypesScreenshotsToJSON(value?: TypesScreenshots | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
    };
}
