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
import type { V1alpha1WorkflowExecuteMode } from './V1alpha1WorkflowExecuteMode';
import {
    V1alpha1WorkflowExecuteModeFromJSON,
    V1alpha1WorkflowExecuteModeFromJSONTyped,
    V1alpha1WorkflowExecuteModeToJSON,
} from './V1alpha1WorkflowExecuteMode';

/**
 * 
 * @export
 * @interface V1RunPipelineRequest
 */
export interface V1RunPipelineRequest {
    /**
     * 
     * @type {string}
     * @memberof V1RunPipelineRequest
     */
    contextName: string;
    /**
     * 
     * @type {V1alpha1WorkflowExecuteMode}
     * @memberof V1RunPipelineRequest
     */
    mode?: V1alpha1WorkflowExecuteMode;
}

/**
 * Check if a given object implements the V1RunPipelineRequest interface.
 */
export function instanceOfV1RunPipelineRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contextName" in value;

    return isInstance;
}

export function V1RunPipelineRequestFromJSON(json: any): V1RunPipelineRequest {
    return V1RunPipelineRequestFromJSONTyped(json, false);
}

export function V1RunPipelineRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunPipelineRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contextName': json['contextName'],
        'mode': !exists(json, 'mode') ? undefined : V1alpha1WorkflowExecuteModeFromJSON(json['mode']),
    };
}

export function V1RunPipelineRequestToJSON(value?: V1RunPipelineRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contextName': value.contextName,
        'mode': V1alpha1WorkflowExecuteModeToJSON(value.mode),
    };
}

