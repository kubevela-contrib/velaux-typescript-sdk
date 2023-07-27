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
import type { V1TargetBase } from './V1TargetBase';
import {
    V1TargetBaseFromJSON,
    V1TargetBaseFromJSONTyped,
    V1TargetBaseToJSON,
} from './V1TargetBase';

/**
 * 
 * @export
 * @interface V1ListTargetResponse
 */
export interface V1ListTargetResponse {
    /**
     * 
     * @type {Array<V1TargetBase>}
     * @memberof V1ListTargetResponse
     */
    targets: Array<V1TargetBase>;
    /**
     * 
     * @type {number}
     * @memberof V1ListTargetResponse
     */
    total: number;
}

/**
 * Check if a given object implements the V1ListTargetResponse interface.
 */
export function instanceOfV1ListTargetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "targets" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function V1ListTargetResponseFromJSON(json: any): V1ListTargetResponse {
    return V1ListTargetResponseFromJSONTyped(json, false);
}

export function V1ListTargetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListTargetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'targets': ((json['targets'] as Array<any>).map(V1TargetBaseFromJSON)),
        'total': json['total'],
    };
}

export function V1ListTargetResponseToJSON(value?: V1ListTargetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'targets': ((value.targets as Array<any>).map(V1TargetBaseToJSON)),
        'total': value.total,
    };
}

