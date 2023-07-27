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
import type { V1WorkflowRecord } from './V1WorkflowRecord';
import {
    V1WorkflowRecordFromJSON,
    V1WorkflowRecordFromJSONTyped,
    V1WorkflowRecordToJSON,
} from './V1WorkflowRecord';

/**
 * 
 * @export
 * @interface V1ListWorkflowRecordsResponse
 */
export interface V1ListWorkflowRecordsResponse {
    /**
     * 
     * @type {Array<V1WorkflowRecord>}
     * @memberof V1ListWorkflowRecordsResponse
     */
    records: Array<V1WorkflowRecord>;
    /**
     * 
     * @type {number}
     * @memberof V1ListWorkflowRecordsResponse
     */
    total: number;
}

/**
 * Check if a given object implements the V1ListWorkflowRecordsResponse interface.
 */
export function instanceOfV1ListWorkflowRecordsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "records" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function V1ListWorkflowRecordsResponseFromJSON(json: any): V1ListWorkflowRecordsResponse {
    return V1ListWorkflowRecordsResponseFromJSONTyped(json, false);
}

export function V1ListWorkflowRecordsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListWorkflowRecordsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'records': ((json['records'] as Array<any>).map(V1WorkflowRecordFromJSON)),
        'total': json['total'],
    };
}

export function V1ListWorkflowRecordsResponseToJSON(value?: V1ListWorkflowRecordsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'records': ((value.records as Array<any>).map(V1WorkflowRecordToJSON)),
        'total': value.total,
    };
}

