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
 * @interface SchemaOption
 */
export interface SchemaOption {
    /**
     * 
     * @type {string}
     * @memberof SchemaOption
     */
    label: string;
    /**
     * 
     * @type {object}
     * @memberof SchemaOption
     */
    value: object;
}

/**
 * Check if a given object implements the SchemaOption interface.
 */
export function instanceOfSchemaOption(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function SchemaOptionFromJSON(json: any): SchemaOption {
    return SchemaOptionFromJSONTyped(json, false);
}

export function SchemaOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': json['label'],
        'value': json['value'],
    };
}

export function SchemaOptionToJSON(value?: SchemaOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value': value.value,
    };
}

