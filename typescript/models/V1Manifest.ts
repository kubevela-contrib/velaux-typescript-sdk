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
import type { V1Descriptor } from './V1Descriptor';
import {
    V1DescriptorFromJSON,
    V1DescriptorFromJSONTyped,
    V1DescriptorToJSON,
} from './V1Descriptor';

/**
 * 
 * @export
 * @interface V1Manifest
 */
export interface V1Manifest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Manifest
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {V1Descriptor}
     * @memberof V1Manifest
     */
    config: V1Descriptor;
    /**
     * 
     * @type {Array<V1Descriptor>}
     * @memberof V1Manifest
     */
    layers: Array<V1Descriptor>;
    /**
     * 
     * @type {string}
     * @memberof V1Manifest
     */
    mediaType?: string;
    /**
     * 
     * @type {number}
     * @memberof V1Manifest
     */
    schemaVersion: number;
    /**
     * 
     * @type {V1Descriptor}
     * @memberof V1Manifest
     */
    subject?: V1Descriptor;
}

/**
 * Check if a given object implements the V1Manifest interface.
 */
export function instanceOfV1Manifest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "config" in value;
    isInstance = isInstance && "layers" in value;
    isInstance = isInstance && "schemaVersion" in value;

    return isInstance;
}

export function V1ManifestFromJSON(json: any): V1Manifest {
    return V1ManifestFromJSONTyped(json, false);
}

export function V1ManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Manifest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'config': V1DescriptorFromJSON(json['config']),
        'layers': ((json['layers'] as Array<any>).map(V1DescriptorFromJSON)),
        'mediaType': !exists(json, 'mediaType') ? undefined : json['mediaType'],
        'schemaVersion': json['schemaVersion'],
        'subject': !exists(json, 'subject') ? undefined : V1DescriptorFromJSON(json['subject']),
    };
}

export function V1ManifestToJSON(value?: V1Manifest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotations': value.annotations,
        'config': V1DescriptorToJSON(value.config),
        'layers': ((value.layers as Array<any>).map(V1DescriptorToJSON)),
        'mediaType': value.mediaType,
        'schemaVersion': value.schemaVersion,
        'subject': V1DescriptorToJSON(value.subject),
    };
}

