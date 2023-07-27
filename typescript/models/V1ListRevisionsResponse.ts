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
import type { V1ApplicationRevisionBase } from './V1ApplicationRevisionBase';
import {
    V1ApplicationRevisionBaseFromJSON,
    V1ApplicationRevisionBaseFromJSONTyped,
    V1ApplicationRevisionBaseToJSON,
} from './V1ApplicationRevisionBase';

/**
 * 
 * @export
 * @interface V1ListRevisionsResponse
 */
export interface V1ListRevisionsResponse {
    /**
     * 
     * @type {Array<V1ApplicationRevisionBase>}
     * @memberof V1ListRevisionsResponse
     */
    revisions: Array<V1ApplicationRevisionBase>;
    /**
     * 
     * @type {number}
     * @memberof V1ListRevisionsResponse
     */
    total: number;
}

/**
 * Check if a given object implements the V1ListRevisionsResponse interface.
 */
export function instanceOfV1ListRevisionsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "revisions" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function V1ListRevisionsResponseFromJSON(json: any): V1ListRevisionsResponse {
    return V1ListRevisionsResponseFromJSONTyped(json, false);
}

export function V1ListRevisionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListRevisionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'revisions': ((json['revisions'] as Array<any>).map(V1ApplicationRevisionBaseFromJSON)),
        'total': json['total'],
    };
}

export function V1ListRevisionsResponseToJSON(value?: V1ListRevisionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'revisions': ((value.revisions as Array<any>).map(V1ApplicationRevisionBaseToJSON)),
        'total': value.total,
    };
}

