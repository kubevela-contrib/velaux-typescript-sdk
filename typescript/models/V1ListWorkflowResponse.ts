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
import type { V1WorkflowBase } from './V1WorkflowBase';
import {
    V1WorkflowBaseFromJSON,
    V1WorkflowBaseFromJSONTyped,
    V1WorkflowBaseToJSON,
} from './V1WorkflowBase';

/**
 * 
 * @export
 * @interface V1ListWorkflowResponse
 */
export interface V1ListWorkflowResponse {
    /**
     * 
     * @type {Array<V1WorkflowBase>}
     * @memberof V1ListWorkflowResponse
     */
    workflows: Array<V1WorkflowBase>;
}

/**
 * Check if a given object implements the V1ListWorkflowResponse interface.
 */
export function instanceOfV1ListWorkflowResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "workflows" in value;

    return isInstance;
}

export function V1ListWorkflowResponseFromJSON(json: any): V1ListWorkflowResponse {
    return V1ListWorkflowResponseFromJSONTyped(json, false);
}

export function V1ListWorkflowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListWorkflowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workflows': ((json['workflows'] as Array<any>).map(V1WorkflowBaseFromJSON)),
    };
}

export function V1ListWorkflowResponseToJSON(value?: V1ListWorkflowResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workflows': ((value.workflows as Array<any>).map(V1WorkflowBaseToJSON)),
    };
}

