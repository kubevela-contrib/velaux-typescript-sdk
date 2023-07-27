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
 * @interface V1UpdateProjectUserRequest
 */
export interface V1UpdateProjectUserRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1UpdateProjectUserRequest
     */
    userRoles: Array<string>;
}

/**
 * Check if a given object implements the V1UpdateProjectUserRequest interface.
 */
export function instanceOfV1UpdateProjectUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userRoles" in value;

    return isInstance;
}

export function V1UpdateProjectUserRequestFromJSON(json: any): V1UpdateProjectUserRequest {
    return V1UpdateProjectUserRequestFromJSONTyped(json, false);
}

export function V1UpdateProjectUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UpdateProjectUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userRoles': json['userRoles'],
    };
}

export function V1UpdateProjectUserRequestToJSON(value?: V1UpdateProjectUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userRoles': value.userRoles,
    };
}

