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
  BcodeBcode,
  V1Config,
  V1ConfigTemplateDetail,
  V1CreateConfigRequest,
  V1ListConfigResponse,
  V1ListConfigTemplateResponse,
} from '../models/index';
import {
    BcodeBcodeFromJSON,
    BcodeBcodeToJSON,
    V1ConfigFromJSON,
    V1ConfigToJSON,
    V1ConfigTemplateDetailFromJSON,
    V1ConfigTemplateDetailToJSON,
    V1CreateConfigRequestFromJSON,
    V1CreateConfigRequestToJSON,
    V1ListConfigResponseFromJSON,
    V1ListConfigResponseToJSON,
    V1ListConfigTemplateResponseFromJSON,
    V1ListConfigTemplateResponseToJSON,
} from '../models/index';

export interface CreateConfigRequest {
    body: V1CreateConfigRequest;
}

export interface DeleteConfigRequest {
    configName: string;
}

export interface GetConfigRequest {
    configName: string;
}

export interface GetConfigTemplateRequest {
    templateName: string;
    namespace?: string;
}

export interface GetConfigsRequest {
    template?: string;
}

export interface UpdateConfigRequest {
    configName: string;
}

/**
 *
 */
export class ConfigApi extends runtime.BaseAPI {

    /**
     * create or update a config
     */
    async createConfigRaw(requestParameters: CreateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Config>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/configs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1CreateConfigRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ConfigFromJSON(jsonValue));
    }

    /**
     * create or update a config
     */
    async createConfig(requestParameters: CreateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Config> {
        const response = await this.createConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a config
     */
    async deleteConfigRaw(requestParameters: DeleteConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.configName === null || requestParameters.configName === undefined) {
            throw new runtime.RequiredError('configName','Required parameter requestParameters.configName was null or undefined when calling deleteConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/configs/{configName}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters.configName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * delete a config
     */
    async deleteConfig(requestParameters: DeleteConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * detail a config
     */
    async getConfigRaw(requestParameters: GetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.configName === null || requestParameters.configName === undefined) {
            throw new runtime.RequiredError('configName','Required parameter requestParameters.configName was null or undefined when calling getConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/configs/{configName}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters.configName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * detail a config
     */
    async getConfig(requestParameters: GetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.getConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Detail a template
     */
    async getConfigTemplateRaw(requestParameters: GetConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ConfigTemplateDetail>> {
        if (requestParameters.templateName === null || requestParameters.templateName === undefined) {
            throw new runtime.RequiredError('templateName','Required parameter requestParameters.templateName was null or undefined when calling getConfigTemplate.');
        }

        const queryParameters: any = {};

        if (requestParameters.namespace !== undefined) {
            queryParameters['namespace'] = requestParameters.namespace;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/config_templates/{templateName}`.replace(`{${"templateName"}}`, encodeURIComponent(String(requestParameters.templateName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ConfigTemplateDetailFromJSON(jsonValue));
    }

    /**
     * Detail a template
     */
    async getConfigTemplate(requestParameters: GetConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ConfigTemplateDetail> {
        const response = await this.getConfigTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list all configs that belong to the system scope
     */
    async getConfigsRaw(requestParameters: GetConfigsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListConfigResponse>> {
        const queryParameters: any = {};

        if (requestParameters.template !== undefined) {
            queryParameters['template'] = requestParameters.template;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/configs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListConfigResponseFromJSON(jsonValue));
    }

    /**
     * list all configs that belong to the system scope
     */
    async getConfigs(requestParameters: GetConfigsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListConfigResponse> {
        const response = await this.getConfigsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all config templates from the system namespace
     */
    async listConfigTemplatesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListConfigTemplateResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/config_templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListConfigTemplateResponseFromJSON(jsonValue));
    }

    /**
     * List all config templates from the system namespace
     */
    async listConfigTemplates(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListConfigTemplateResponse> {
        const response = await this.listConfigTemplatesRaw(initOverrides);
        return await response.value();
    }

    /**
     * update a config
     */
    async updateConfigRaw(requestParameters: UpdateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.configName === null || requestParameters.configName === undefined) {
            throw new runtime.RequiredError('configName','Required parameter requestParameters.configName was null or undefined when calling updateConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/configs/{configName}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters.configName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * update a config
     */
    async updateConfig(requestParameters: UpdateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.updateConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

}