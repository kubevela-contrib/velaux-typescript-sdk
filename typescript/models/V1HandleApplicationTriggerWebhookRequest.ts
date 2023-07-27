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
import type { ModelCodeInfo } from './ModelCodeInfo';
import {
    ModelCodeInfoFromJSON,
    ModelCodeInfoFromJSONTyped,
    ModelCodeInfoToJSON,
} from './ModelCodeInfo';

/**
 * 
 * @export
 * @interface V1HandleApplicationTriggerWebhookRequest
 */
export interface V1HandleApplicationTriggerWebhookRequest {
    /**
     * 
     * @type {string}
     * @memberof V1HandleApplicationTriggerWebhookRequest
     */
    action?: string;
    /**
     * 
     * @type {ModelCodeInfo}
     * @memberof V1HandleApplicationTriggerWebhookRequest
     */
    codeInfo?: ModelCodeInfo;
    /**
     * 
     * @type {string}
     * @memberof V1HandleApplicationTriggerWebhookRequest
     */
    step?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof V1HandleApplicationTriggerWebhookRequest
     */
    upgrade?: { [key: string]: object; };
}

/**
 * Check if a given object implements the V1HandleApplicationTriggerWebhookRequest interface.
 */
export function instanceOfV1HandleApplicationTriggerWebhookRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HandleApplicationTriggerWebhookRequestFromJSON(json: any): V1HandleApplicationTriggerWebhookRequest {
    return V1HandleApplicationTriggerWebhookRequestFromJSONTyped(json, false);
}

export function V1HandleApplicationTriggerWebhookRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HandleApplicationTriggerWebhookRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'codeInfo': !exists(json, 'codeInfo') ? undefined : ModelCodeInfoFromJSON(json['codeInfo']),
        'step': !exists(json, 'step') ? undefined : json['step'],
        'upgrade': !exists(json, 'upgrade') ? undefined : json['upgrade'],
    };
}

export function V1HandleApplicationTriggerWebhookRequestToJSON(value?: V1HandleApplicationTriggerWebhookRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'codeInfo': ModelCodeInfoToJSON(value.codeInfo),
        'step': value.step,
        'upgrade': value.upgrade,
    };
}
