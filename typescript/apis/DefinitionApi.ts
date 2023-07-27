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


import * as runtime from '../runtime';
import type {
  V1DetailDefinitionResponse,
  V1ListDefinitionResponse,
  V1UpdateDefinitionStatusRequest,
  V1UpdateUISchemaRequest,
} from '../models/index';
import {
    V1DetailDefinitionResponseFromJSON,
    V1DetailDefinitionResponseToJSON,
    V1ListDefinitionResponseFromJSON,
    V1ListDefinitionResponseToJSON,
    V1UpdateDefinitionStatusRequestFromJSON,
    V1UpdateDefinitionStatusRequestToJSON,
    V1UpdateUISchemaRequestFromJSON,
    V1UpdateUISchemaRequestToJSON,
} from '../models/index';

export interface DetailDefinitionRequest {
    definitionName: string;
    type?: string;
}

export interface ListDefinitionsRequest {
    type: ListDefinitionsTypeEnum;
    queryAll?: boolean;
    appliedWorkload?: string;
    ownerAddon?: string;
    scope?: string;
}

export interface UpdateDefinitionStatusRequest {
    definitionName: string;
    body: V1UpdateDefinitionStatusRequest;
}

export interface UpdateUISchemaRequest {
    definitionName: string;
    body: V1UpdateUISchemaRequest;
}

/**
 *
 */
export class DefinitionApi extends runtime.BaseAPI {

    /**
     * Detail a definition
     */
    async detailDefinitionRaw(requestParameters: DetailDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DetailDefinitionResponse>> {
        if (requestParameters.definitionName === null || requestParameters.definitionName === undefined) {
            throw new runtime.RequiredError('definitionName','Required parameter requestParameters.definitionName was null or undefined when calling detailDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/definitions/{definitionName}`.replace(`{${"definitionName"}}`, encodeURIComponent(String(requestParameters.definitionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DetailDefinitionResponseFromJSON(jsonValue));
    }

    /**
     * Detail a definition
     */
    async detailDefinition(requestParameters: DetailDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DetailDefinitionResponse> {
        const response = await this.detailDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list all definitions
     */
    async listDefinitionsRaw(requestParameters: ListDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListDefinitionResponse>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling listDefinitions.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.queryAll !== undefined) {
            queryParameters['queryAll'] = requestParameters.queryAll;
        }

        if (requestParameters.appliedWorkload !== undefined) {
            queryParameters['appliedWorkload'] = requestParameters.appliedWorkload;
        }

        if (requestParameters.ownerAddon !== undefined) {
            queryParameters['ownerAddon'] = requestParameters.ownerAddon;
        }

        if (requestParameters.scope !== undefined) {
            queryParameters['scope'] = requestParameters.scope;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/definitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListDefinitionResponseFromJSON(jsonValue));
    }

    /**
     * list all definitions
     */
    async listDefinitions(requestParameters: ListDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListDefinitionResponse> {
        const response = await this.listDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the status for a definition
     */
    async updateDefinitionStatusRaw(requestParameters: UpdateDefinitionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.definitionName === null || requestParameters.definitionName === undefined) {
            throw new runtime.RequiredError('definitionName','Required parameter requestParameters.definitionName was null or undefined when calling updateDefinitionStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateDefinitionStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/definitions/{definitionName}/status`.replace(`{${"definitionName"}}`, encodeURIComponent(String(requestParameters.definitionName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1UpdateDefinitionStatusRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update the status for a definition
     */
    async updateDefinitionStatus(requestParameters: UpdateDefinitionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.updateDefinitionStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the UI schema for a definition
     */
    async updateUISchemaRaw(requestParameters: UpdateUISchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.definitionName === null || requestParameters.definitionName === undefined) {
            throw new runtime.RequiredError('definitionName','Required parameter requestParameters.definitionName was null or undefined when calling updateUISchema.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUISchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/definitions/{definitionName}/uischema`.replace(`{${"definitionName"}}`, encodeURIComponent(String(requestParameters.definitionName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1UpdateUISchemaRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update the UI schema for a definition
     */
    async updateUISchema(requestParameters: UpdateUISchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.updateUISchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ListDefinitionsTypeEnum = {
    Component: 'component',
    Trait: 'trait',
    Workflowstep: 'workflowstep',
    Policy: 'policy'
} as const;
export type ListDefinitionsTypeEnum = typeof ListDefinitionsTypeEnum[keyof typeof ListDefinitionsTypeEnum];
