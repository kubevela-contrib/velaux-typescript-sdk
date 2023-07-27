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
import type { ModelWorkflowSpec } from './ModelWorkflowSpec';
import {
    ModelWorkflowSpecFromJSON,
    ModelWorkflowSpecFromJSONTyped,
    ModelWorkflowSpecToJSON,
} from './ModelWorkflowSpec';

/**
 * 
 * @export
 * @interface V1CreatePipelineRequest
 */
export interface V1CreatePipelineRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreatePipelineRequest
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePipelineRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreatePipelineRequest
     */
    name: string;
    /**
     * 
     * @type {ModelWorkflowSpec}
     * @memberof V1CreatePipelineRequest
     */
    spec: ModelWorkflowSpec;
}

/**
 * Check if a given object implements the V1CreatePipelineRequest interface.
 */
export function instanceOfV1CreatePipelineRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1CreatePipelineRequestFromJSON(json: any): V1CreatePipelineRequest {
    return V1CreatePipelineRequestFromJSONTyped(json, false);
}

export function V1CreatePipelineRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreatePipelineRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'spec': ModelWorkflowSpecFromJSON(json['spec']),
    };
}

export function V1CreatePipelineRequestToJSON(value?: V1CreatePipelineRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'description': value.description,
        'name': value.name,
        'spec': ModelWorkflowSpecToJSON(value.spec),
    };
}

