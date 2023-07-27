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
/**
 * 
 * @export
 * @interface V1alpha1StepStatus
 */
export interface V1alpha1StepStatus {
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    firstExecuteTime?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    lastExecuteTime?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    phase?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1StepStatus
     */
    type?: string;
}

/**
 * Check if a given object implements the V1alpha1StepStatus interface.
 */
export function instanceOfV1alpha1StepStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function V1alpha1StepStatusFromJSON(json: any): V1alpha1StepStatus {
    return V1alpha1StepStatusFromJSONTyped(json, false);
}

export function V1alpha1StepStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1StepStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstExecuteTime': !exists(json, 'firstExecuteTime') ? undefined : json['firstExecuteTime'],
        'id': json['id'],
        'lastExecuteTime': !exists(json, 'lastExecuteTime') ? undefined : json['lastExecuteTime'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function V1alpha1StepStatusToJSON(value?: V1alpha1StepStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstExecuteTime': value.firstExecuteTime,
        'id': value.id,
        'lastExecuteTime': value.lastExecuteTime,
        'message': value.message,
        'name': value.name,
        'phase': value.phase,
        'reason': value.reason,
        'type': value.type,
    };
}
