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
import type { SchemaUIParameter } from './SchemaUIParameter';
import {
    SchemaUIParameterFromJSON,
    SchemaUIParameterFromJSONTyped,
    SchemaUIParameterToJSON,
} from './SchemaUIParameter';

/**
 * 
 * @export
 * @interface V1UpdateUISchemaRequest
 */
export interface V1UpdateUISchemaRequest {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateUISchemaRequest
     */
    type: string;
    /**
     * 
     * @type {Array<SchemaUIParameter>}
     * @memberof V1UpdateUISchemaRequest
     */
    uiSchema: Array<SchemaUIParameter>;
}

/**
 * Check if a given object implements the V1UpdateUISchemaRequest interface.
 */
export function instanceOfV1UpdateUISchemaRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "uiSchema" in value;

    return isInstance;
}

export function V1UpdateUISchemaRequestFromJSON(json: any): V1UpdateUISchemaRequest {
    return V1UpdateUISchemaRequestFromJSONTyped(json, false);
}

export function V1UpdateUISchemaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UpdateUISchemaRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'uiSchema': ((json['uiSchema'] as Array<any>).map(SchemaUIParameterFromJSON)),
    };
}

export function V1UpdateUISchemaRequestToJSON(value?: V1UpdateUISchemaRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'uiSchema': ((value.uiSchema as Array<any>).map(SchemaUIParameterToJSON)),
    };
}
