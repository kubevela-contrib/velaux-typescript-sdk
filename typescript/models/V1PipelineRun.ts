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
import type { ModelValue } from './ModelValue';
import {
    ModelValueFromJSON,
    ModelValueFromJSONTyped,
    ModelValueToJSON,
} from './ModelValue';
import type { V1NameAlias } from './V1NameAlias';
import {
    V1NameAliasFromJSON,
    V1NameAliasFromJSONTyped,
    V1NameAliasToJSON,
} from './V1NameAlias';
import type { V1alpha1WorkflowRunSpec } from './V1alpha1WorkflowRunSpec';
import {
    V1alpha1WorkflowRunSpecFromJSON,
    V1alpha1WorkflowRunSpecFromJSONTyped,
    V1alpha1WorkflowRunSpecToJSON,
} from './V1alpha1WorkflowRunSpec';
import type { V1alpha1WorkflowRunStatus } from './V1alpha1WorkflowRunStatus';
import {
    V1alpha1WorkflowRunStatusFromJSON,
    V1alpha1WorkflowRunStatusFromJSONTyped,
    V1alpha1WorkflowRunStatusToJSON,
} from './V1alpha1WorkflowRunStatus';

/**
 * 
 * @export
 * @interface V1PipelineRun
 */
export interface V1PipelineRun {
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRun
     */
    contextName: string;
    /**
     * 
     * @type {Array<ModelValue>}
     * @memberof V1PipelineRun
     */
    contextValues: Array<ModelValue>;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRun
     */
    pipelineName: string;
    /**
     * 
     * @type {string}
     * @memberof V1PipelineRun
     */
    pipelineRunName: string;
    /**
     * 
     * @type {V1NameAlias}
     * @memberof V1PipelineRun
     */
    project: V1NameAlias;
    /**
     * 
     * @type {number}
     * @memberof V1PipelineRun
     */
    record: number;
    /**
     * 
     * @type {V1alpha1WorkflowRunSpec}
     * @memberof V1PipelineRun
     */
    spec: V1alpha1WorkflowRunSpec;
    /**
     * 
     * @type {V1alpha1WorkflowRunStatus}
     * @memberof V1PipelineRun
     */
    status: V1alpha1WorkflowRunStatus;
}

/**
 * Check if a given object implements the V1PipelineRun interface.
 */
export function instanceOfV1PipelineRun(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contextName" in value;
    isInstance = isInstance && "contextValues" in value;
    isInstance = isInstance && "pipelineName" in value;
    isInstance = isInstance && "pipelineRunName" in value;
    isInstance = isInstance && "project" in value;
    isInstance = isInstance && "record" in value;
    isInstance = isInstance && "spec" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function V1PipelineRunFromJSON(json: any): V1PipelineRun {
    return V1PipelineRunFromJSONTyped(json, false);
}

export function V1PipelineRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PipelineRun {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contextName': json['contextName'],
        'contextValues': ((json['contextValues'] as Array<any>).map(ModelValueFromJSON)),
        'pipelineName': json['pipelineName'],
        'pipelineRunName': json['pipelineRunName'],
        'project': V1NameAliasFromJSON(json['project']),
        'record': json['record'],
        'spec': V1alpha1WorkflowRunSpecFromJSON(json['spec']),
        'status': V1alpha1WorkflowRunStatusFromJSON(json['status']),
    };
}

export function V1PipelineRunToJSON(value?: V1PipelineRun | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contextName': value.contextName,
        'contextValues': ((value.contextValues as Array<any>).map(ModelValueToJSON)),
        'pipelineName': value.pipelineName,
        'pipelineRunName': value.pipelineRunName,
        'project': V1NameAliasToJSON(value.project),
        'record': value.record,
        'spec': V1alpha1WorkflowRunSpecToJSON(value.spec),
        'status': V1alpha1WorkflowRunStatusToJSON(value.status),
    };
}

