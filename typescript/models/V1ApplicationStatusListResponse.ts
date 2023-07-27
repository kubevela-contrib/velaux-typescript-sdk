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
import type { V1ApplicationStatusResponse } from './V1ApplicationStatusResponse';
import {
    V1ApplicationStatusResponseFromJSON,
    V1ApplicationStatusResponseFromJSONTyped,
    V1ApplicationStatusResponseToJSON,
} from './V1ApplicationStatusResponse';

/**
 * 
 * @export
 * @interface V1ApplicationStatusListResponse
 */
export interface V1ApplicationStatusListResponse {
    /**
     * 
     * @type {Array<V1ApplicationStatusResponse>}
     * @memberof V1ApplicationStatusListResponse
     */
    status: Array<V1ApplicationStatusResponse>;
}

/**
 * Check if a given object implements the V1ApplicationStatusListResponse interface.
 */
export function instanceOfV1ApplicationStatusListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function V1ApplicationStatusListResponseFromJSON(json: any): V1ApplicationStatusListResponse {
    return V1ApplicationStatusListResponseFromJSONTyped(json, false);
}

export function V1ApplicationStatusListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ApplicationStatusListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': ((json['status'] as Array<any>).map(V1ApplicationStatusResponseFromJSON)),
    };
}

export function V1ApplicationStatusListResponseToJSON(value?: V1ApplicationStatusListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': ((value.status as Array<any>).map(V1ApplicationStatusResponseToJSON)),
    };
}

