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
import type { V1PipelineRun } from './V1PipelineRun';
import {
    V1PipelineRunFromJSON,
    V1PipelineRunFromJSONTyped,
    V1PipelineRunToJSON,
} from './V1PipelineRun';
import type { V1RunStat } from './V1RunStat';
import {
    V1RunStatFromJSON,
    V1RunStatFromJSONTyped,
    V1RunStatToJSON,
} from './V1RunStat';

/**
 * 
 * @export
 * @interface V1PipelineInfo
 */
export interface V1PipelineInfo {
    /**
     * 
     * @type {V1PipelineRun}
     * @memberof V1PipelineInfo
     */
    lastRun: V1PipelineRun;
    /**
     * 
     * @type {V1RunStat}
     * @memberof V1PipelineInfo
     */
    runStat: V1RunStat;
}

/**
 * Check if a given object implements the V1PipelineInfo interface.
 */
export function instanceOfV1PipelineInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lastRun" in value;
    isInstance = isInstance && "runStat" in value;

    return isInstance;
}

export function V1PipelineInfoFromJSON(json: any): V1PipelineInfo {
    return V1PipelineInfoFromJSONTyped(json, false);
}

export function V1PipelineInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PipelineInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastRun': V1PipelineRunFromJSON(json['lastRun']),
        'runStat': V1RunStatFromJSON(json['runStat']),
    };
}

export function V1PipelineInfoToJSON(value?: V1PipelineInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastRun': V1PipelineRunToJSON(value.lastRun),
        'runStat': V1RunStatToJSON(value.runStat),
    };
}

