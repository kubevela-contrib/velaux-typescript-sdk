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
import type { ModelStepStatus } from './ModelStepStatus';
import {
    ModelStepStatusFromJSON,
    ModelStepStatusFromJSONTyped,
    ModelStepStatusToJSON,
} from './ModelStepStatus';

/**
 * 
 * @export
 * @interface ModelWorkflowStepStatus
 */
export interface ModelWorkflowStepStatus {
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    alias: string;
    /**
     * 
     * @type {Date}
     * @memberof ModelWorkflowStepStatus
     */
    firstExecuteTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof ModelWorkflowStepStatus
     */
    lastExecuteTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    phase?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    reason?: string;
    /**
     * 
     * @type {Array<ModelStepStatus>}
     * @memberof ModelWorkflowStepStatus
     */
    subSteps?: Array<ModelStepStatus>;
    /**
     * 
     * @type {string}
     * @memberof ModelWorkflowStepStatus
     */
    type?: string;
}

/**
 * Check if a given object implements the ModelWorkflowStepStatus interface.
 */
export function instanceOfModelWorkflowStepStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ModelWorkflowStepStatusFromJSON(json: any): ModelWorkflowStepStatus {
    return ModelWorkflowStepStatusFromJSONTyped(json, false);
}

export function ModelWorkflowStepStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelWorkflowStepStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'firstExecuteTime': !exists(json, 'firstExecuteTime') ? undefined : (new Date(json['firstExecuteTime'])),
        'id': json['id'],
        'lastExecuteTime': !exists(json, 'lastExecuteTime') ? undefined : (new Date(json['lastExecuteTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'name': json['name'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'subSteps': !exists(json, 'subSteps') ? undefined : ((json['subSteps'] as Array<any>).map(ModelStepStatusFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ModelWorkflowStepStatusToJSON(value?: ModelWorkflowStepStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'firstExecuteTime': value.firstExecuteTime === undefined ? undefined : (value.firstExecuteTime.toISOString()),
        'id': value.id,
        'lastExecuteTime': value.lastExecuteTime === undefined ? undefined : (value.lastExecuteTime.toISOString()),
        'message': value.message,
        'name': value.name,
        'phase': value.phase,
        'reason': value.reason,
        'subSteps': value.subSteps === undefined ? undefined : ((value.subSteps as Array<any>).map(ModelStepStatusToJSON)),
        'type': value.type,
    };
}

