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
import type { CommonDefinitionReference } from './CommonDefinitionReference';
import {
    CommonDefinitionReferenceFromJSON,
    CommonDefinitionReferenceFromJSONTyped,
    CommonDefinitionReferenceToJSON,
} from './CommonDefinitionReference';
import type { CommonSchematic } from './CommonSchematic';
import {
    CommonSchematicFromJSON,
    CommonSchematicFromJSONTyped,
    CommonSchematicToJSON,
} from './CommonSchematic';
import type { CommonStatus } from './CommonStatus';
import {
    CommonStatusFromJSON,
    CommonStatusFromJSONTyped,
    CommonStatusToJSON,
} from './CommonStatus';

/**
 * 
 * @export
 * @interface V1beta1TraitDefinitionSpec
 */
export interface V1beta1TraitDefinitionSpec {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1beta1TraitDefinitionSpec
     */
    appliesToWorkloads?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1beta1TraitDefinitionSpec
     */
    conflictsWith?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1beta1TraitDefinitionSpec
     */
    controlPlaneOnly?: boolean;
    /**
     * 
     * @type {CommonDefinitionReference}
     * @memberof V1beta1TraitDefinitionSpec
     */
    definitionRef?: CommonDefinitionReference;
    /**
     * 
     * @type {string}
     * @memberof V1beta1TraitDefinitionSpec
     */
    extension?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1beta1TraitDefinitionSpec
     */
    manageWorkload?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1beta1TraitDefinitionSpec
     */
    podDisruptive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1beta1TraitDefinitionSpec
     */
    revisionEnabled?: boolean;
    /**
     * 
     * @type {CommonSchematic}
     * @memberof V1beta1TraitDefinitionSpec
     */
    schematic?: CommonSchematic;
    /**
     * 
     * @type {string}
     * @memberof V1beta1TraitDefinitionSpec
     */
    stage?: string;
    /**
     * 
     * @type {CommonStatus}
     * @memberof V1beta1TraitDefinitionSpec
     */
    status?: CommonStatus;
    /**
     * 
     * @type {string}
     * @memberof V1beta1TraitDefinitionSpec
     */
    workloadRefPath?: string;
}

/**
 * Check if a given object implements the V1beta1TraitDefinitionSpec interface.
 */
export function instanceOfV1beta1TraitDefinitionSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1TraitDefinitionSpecFromJSON(json: any): V1beta1TraitDefinitionSpec {
    return V1beta1TraitDefinitionSpecFromJSONTyped(json, false);
}

export function V1beta1TraitDefinitionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1TraitDefinitionSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appliesToWorkloads': !exists(json, 'appliesToWorkloads') ? undefined : json['appliesToWorkloads'],
        'conflictsWith': !exists(json, 'conflictsWith') ? undefined : json['conflictsWith'],
        'controlPlaneOnly': !exists(json, 'controlPlaneOnly') ? undefined : json['controlPlaneOnly'],
        'definitionRef': !exists(json, 'definitionRef') ? undefined : CommonDefinitionReferenceFromJSON(json['definitionRef']),
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
        'manageWorkload': !exists(json, 'manageWorkload') ? undefined : json['manageWorkload'],
        'podDisruptive': !exists(json, 'podDisruptive') ? undefined : json['podDisruptive'],
        'revisionEnabled': !exists(json, 'revisionEnabled') ? undefined : json['revisionEnabled'],
        'schematic': !exists(json, 'schematic') ? undefined : CommonSchematicFromJSON(json['schematic']),
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'status': !exists(json, 'status') ? undefined : CommonStatusFromJSON(json['status']),
        'workloadRefPath': !exists(json, 'workloadRefPath') ? undefined : json['workloadRefPath'],
    };
}

export function V1beta1TraitDefinitionSpecToJSON(value?: V1beta1TraitDefinitionSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appliesToWorkloads': value.appliesToWorkloads,
        'conflictsWith': value.conflictsWith,
        'controlPlaneOnly': value.controlPlaneOnly,
        'definitionRef': CommonDefinitionReferenceToJSON(value.definitionRef),
        'extension': value.extension,
        'manageWorkload': value.manageWorkload,
        'podDisruptive': value.podDisruptive,
        'revisionEnabled': value.revisionEnabled,
        'schematic': CommonSchematicToJSON(value.schematic),
        'stage': value.stage,
        'status': CommonStatusToJSON(value.status),
        'workloadRefPath': value.workloadRefPath,
    };
}

