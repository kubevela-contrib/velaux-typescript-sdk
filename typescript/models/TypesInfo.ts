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
import type { TypesBuildInfo } from './TypesBuildInfo';
import {
    TypesBuildInfoFromJSON,
    TypesBuildInfoFromJSONTyped,
    TypesBuildInfoToJSON,
} from './TypesBuildInfo';
import type { TypesInfoLink } from './TypesInfoLink';
import {
    TypesInfoLinkFromJSON,
    TypesInfoLinkFromJSONTyped,
    TypesInfoLinkToJSON,
} from './TypesInfoLink';
import type { TypesLogos } from './TypesLogos';
import {
    TypesLogosFromJSON,
    TypesLogosFromJSONTyped,
    TypesLogosToJSON,
} from './TypesLogos';
import type { TypesScreenshots } from './TypesScreenshots';
import {
    TypesScreenshotsFromJSON,
    TypesScreenshotsFromJSONTyped,
    TypesScreenshotsToJSON,
} from './TypesScreenshots';

/**
 * 
 * @export
 * @interface TypesInfo
 */
export interface TypesInfo {
    /**
     * 
     * @type {TypesInfoLink}
     * @memberof TypesInfo
     */
    author: TypesInfoLink;
    /**
     * 
     * @type {TypesBuildInfo}
     * @memberof TypesInfo
     */
    build: TypesBuildInfo;
    /**
     * 
     * @type {string}
     * @memberof TypesInfo
     */
    description: string;
    /**
     * 
     * @type {Array<TypesInfoLink>}
     * @memberof TypesInfo
     */
    links: Array<TypesInfoLink>;
    /**
     * 
     * @type {TypesLogos}
     * @memberof TypesInfo
     */
    logos: TypesLogos;
    /**
     * 
     * @type {Array<TypesScreenshots>}
     * @memberof TypesInfo
     */
    screenshots: Array<TypesScreenshots>;
    /**
     * 
     * @type {string}
     * @memberof TypesInfo
     */
    updated: string;
    /**
     * 
     * @type {string}
     * @memberof TypesInfo
     */
    version: string;
}

/**
 * Check if a given object implements the TypesInfo interface.
 */
export function instanceOfTypesInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "build" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "links" in value;
    isInstance = isInstance && "logos" in value;
    isInstance = isInstance && "screenshots" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function TypesInfoFromJSON(json: any): TypesInfo {
    return TypesInfoFromJSONTyped(json, false);
}

export function TypesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author': TypesInfoLinkFromJSON(json['author']),
        'build': TypesBuildInfoFromJSON(json['build']),
        'description': json['description'],
        'links': ((json['links'] as Array<any>).map(TypesInfoLinkFromJSON)),
        'logos': TypesLogosFromJSON(json['logos']),
        'screenshots': ((json['screenshots'] as Array<any>).map(TypesScreenshotsFromJSON)),
        'updated': json['updated'],
        'version': json['version'],
    };
}

export function TypesInfoToJSON(value?: TypesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': TypesInfoLinkToJSON(value.author),
        'build': TypesBuildInfoToJSON(value.build),
        'description': value.description,
        'links': ((value.links as Array<any>).map(TypesInfoLinkToJSON)),
        'logos': TypesLogosToJSON(value.logos),
        'screenshots': ((value.screenshots as Array<any>).map(TypesScreenshotsToJSON)),
        'updated': value.updated,
        'version': value.version,
    };
}
