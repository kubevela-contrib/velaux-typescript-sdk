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
 * @interface V1AddProjectUserRequest
 */
export interface V1AddProjectUserRequest {
    /**
     * 
     * @type {string}
     * @memberof V1AddProjectUserRequest
     */
    userName: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1AddProjectUserRequest
     */
    userRoles: Array<string>;
}

/**
 * Check if a given object implements the V1AddProjectUserRequest interface.
 */
export function instanceOfV1AddProjectUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userName" in value;
    isInstance = isInstance && "userRoles" in value;

    return isInstance;
}

export function V1AddProjectUserRequestFromJSON(json: any): V1AddProjectUserRequest {
    return V1AddProjectUserRequestFromJSONTyped(json, false);
}

export function V1AddProjectUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AddProjectUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userName': json['userName'],
        'userRoles': json['userRoles'],
    };
}

export function V1AddProjectUserRequestToJSON(value?: V1AddProjectUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userName': value.userName,
        'userRoles': value.userRoles,
    };
}

