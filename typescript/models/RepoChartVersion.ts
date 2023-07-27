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
import type { ChartMetadata } from './ChartMetadata';
import {
    ChartMetadataFromJSON,
    ChartMetadataFromJSONTyped,
    ChartMetadataToJSON,
} from './ChartMetadata';

/**
 * 
 * @export
 * @interface RepoChartVersion
 */
export interface RepoChartVersion {
    /**
     * 
     * @type {ChartMetadata}
     * @memberof RepoChartVersion
     */
    metadata: ChartMetadata;
    /**
     * 
     * @type {string}
     * @memberof RepoChartVersion
     */
    checksum?: string;
    /**
     * 
     * @type {Date}
     * @memberof RepoChartVersion
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof RepoChartVersion
     */
    digest?: string;
    /**
     * 
     * @type {string}
     * @memberof RepoChartVersion
     */
    engine?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RepoChartVersion
     */
    removed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RepoChartVersion
     */
    tillerVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RepoChartVersion
     */
    url?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RepoChartVersion
     */
    urls: Array<string>;
}

/**
 * Check if a given object implements the RepoChartVersion interface.
 */
export function instanceOfRepoChartVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "urls" in value;

    return isInstance;
}

export function RepoChartVersionFromJSON(json: any): RepoChartVersion {
    return RepoChartVersionFromJSONTyped(json, false);
}

export function RepoChartVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepoChartVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': ChartMetadataFromJSON(json['Metadata']),
        'checksum': !exists(json, 'checksum') ? undefined : json['checksum'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'digest': !exists(json, 'digest') ? undefined : json['digest'],
        'engine': !exists(json, 'engine') ? undefined : json['engine'],
        'removed': !exists(json, 'removed') ? undefined : json['removed'],
        'tillerVersion': !exists(json, 'tillerVersion') ? undefined : json['tillerVersion'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'urls': json['urls'],
    };
}

export function RepoChartVersionToJSON(value?: RepoChartVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Metadata': ChartMetadataToJSON(value.metadata),
        'checksum': value.checksum,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'digest': value.digest,
        'engine': value.engine,
        'removed': value.removed,
        'tillerVersion': value.tillerVersion,
        'url': value.url,
        'urls': value.urls,
    };
}
