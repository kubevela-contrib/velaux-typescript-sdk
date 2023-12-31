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
 * @interface ConditionCondition
 */
export interface ConditionCondition {
    /**
     * 
     * @type {string}
     * @memberof ConditionCondition
     */
    lastTransitionTime: string;
    /**
     * 
     * @type {string}
     * @memberof ConditionCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ConditionCondition
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof ConditionCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof ConditionCondition
     */
    type: string;
}

/**
 * Check if a given object implements the ConditionCondition interface.
 */
export function instanceOfConditionCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lastTransitionTime" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ConditionConditionFromJSON(json: any): ConditionCondition {
    return ConditionConditionFromJSONTyped(json, false);
}

export function ConditionConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': json['lastTransitionTime'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function ConditionConditionToJSON(value?: ConditionCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime,
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

