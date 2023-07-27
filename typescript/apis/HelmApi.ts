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
  V1ChartVersionListResponse,
  V1ImageInfo,
  V1ListImageRegistryResponse,
} from '../models/index';
import {
    BcodeBcodeFromJSON,
    BcodeBcodeToJSON,
    V1ChartVersionListResponseFromJSON,
    V1ChartVersionListResponseToJSON,
    V1ImageInfoFromJSON,
    V1ImageInfoToJSON,
    V1ListImageRegistryResponseFromJSON,
    V1ListImageRegistryResponseToJSON,
} from '../models/index';

export interface ChartValuesRequest {
    project: string;
    chart: string;
    version: string;
    repoUrl: string;
    repoType: string;
    secretName?: string;
}

export interface GetChartValuesRequest {
    project: string;
    chart: string;
    version: string;
    repoUrl?: string;
    secretName?: string;
}

export interface GetImageInfoRequest {
    project: string;
    name: string;
    secretName?: string;
}

export interface GetImageReposRequest {
    project: string;
}

export interface ListChartVersionsRequest {
    project: string;
    chart: string;
    repoUrl?: string;
    secretName?: string;
}

export interface ListChartsRequest {
    project: string;
    repoUrl?: string;
    secretName?: string;
}

export interface ListRepoRequest {
    project: string;
}

export interface ListVersionsFromQueryRequest {
    project: string;
    chart: string;
    repoUrl: string;
    secretName?: string;
}

/**
 * 
 */
export class HelmApi extends runtime.BaseAPI {

    /**
     * get chart value
     */
    async chartValuesRaw(requestParameters: ChartValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling chartValues.');
        }

        if (requestParameters.chart === null || requestParameters.chart === undefined) {
            throw new runtime.RequiredError('chart','Required parameter requestParameters.chart was null or undefined when calling chartValues.');
        }

        if (requestParameters.version === null || requestParameters.version === undefined) {
            throw new runtime.RequiredError('version','Required parameter requestParameters.version was null or undefined when calling chartValues.');
        }

        if (requestParameters.repoUrl === null || requestParameters.repoUrl === undefined) {
            throw new runtime.RequiredError('repoUrl','Required parameter requestParameters.repoUrl was null or undefined when calling chartValues.');
        }

        if (requestParameters.repoType === null || requestParameters.repoType === undefined) {
            throw new runtime.RequiredError('repoType','Required parameter requestParameters.repoType was null or undefined when calling chartValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.chart !== undefined) {
            queryParameters['chart'] = requestParameters.chart;
        }

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        if (requestParameters.repoUrl !== undefined) {
            queryParameters['repoUrl'] = requestParameters.repoUrl;
        }

        if (requestParameters.repoType !== undefined) {
            queryParameters['repoType'] = requestParameters.repoType;
        }

        if (requestParameters.secretName !== undefined) {
            queryParameters['secretName'] = requestParameters.secretName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/chart/values`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * get chart value
     */
    async chartValues(requestParameters: ChartValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.chartValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get chart value
     */
    async getChartValuesRaw(requestParameters: GetChartValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling getChartValues.');
        }

        if (requestParameters.chart === null || requestParameters.chart === undefined) {
            throw new runtime.RequiredError('chart','Required parameter requestParameters.chart was null or undefined when calling getChartValues.');
        }

        if (requestParameters.version === null || requestParameters.version === undefined) {
            throw new runtime.RequiredError('version','Required parameter requestParameters.version was null or undefined when calling getChartValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.repoUrl !== undefined) {
            queryParameters['repoUrl'] = requestParameters.repoUrl;
        }

        if (requestParameters.secretName !== undefined) {
            queryParameters['secretName'] = requestParameters.secretName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/charts/{chart}/versions/{version}/values`.replace(`{${"chart"}}`, encodeURIComponent(String(requestParameters.chart))).replace(`{${"version"}}`, encodeURIComponent(String(requestParameters.version))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get chart value
     */
    async getChartValues(requestParameters: GetChartValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getChartValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get the oci repos
     */
    async getImageInfoRaw(requestParameters: GetImageInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ImageInfo>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling getImageInfo.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getImageInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.secretName !== undefined) {
            queryParameters['secretName'] = requestParameters.secretName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/image/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ImageInfoFromJSON(jsonValue));
    }

    /**
     * get the oci repos
     */
    async getImageInfo(requestParameters: GetImageInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ImageInfo> {
        const response = await this.getImageInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get the oci repos
     */
    async getImageReposRaw(requestParameters: GetImageReposRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ListImageRegistryResponse>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling getImageRepos.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/image/repos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListImageRegistryResponseFromJSON(jsonValue));
    }

    /**
     * get the oci repos
     */
    async getImageRepos(requestParameters: GetImageReposRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ListImageRegistryResponse> {
        const response = await this.getImageReposRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list versions
     */
    async listChartVersionsRaw(requestParameters: ListChartVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ChartVersionListResponse>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling listChartVersions.');
        }

        if (requestParameters.chart === null || requestParameters.chart === undefined) {
            throw new runtime.RequiredError('chart','Required parameter requestParameters.chart was null or undefined when calling listChartVersions.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.repoUrl !== undefined) {
            queryParameters['repoUrl'] = requestParameters.repoUrl;
        }

        if (requestParameters.secretName !== undefined) {
            queryParameters['secretName'] = requestParameters.secretName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/charts/{chart}/versions`.replace(`{${"chart"}}`, encodeURIComponent(String(requestParameters.chart))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ChartVersionListResponseFromJSON(jsonValue));
    }

    /**
     * list versions
     */
    async listChartVersions(requestParameters: ListChartVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ChartVersionListResponse> {
        const response = await this.listChartVersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list charts
     */
    async listChartsRaw(requestParameters: ListChartsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling listCharts.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.repoUrl !== undefined) {
            queryParameters['repoUrl'] = requestParameters.repoUrl;
        }

        if (requestParameters.secretName !== undefined) {
            queryParameters['secretName'] = requestParameters.secretName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/charts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * list charts
     */
    async listCharts(requestParameters: ListChartsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listChartsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list chart repo
     */
    async listRepoRaw(requestParameters: ListRepoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling listRepo.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/chart_repos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * list chart repo
     */
    async listRepo(requestParameters: ListRepoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listRepoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list versions
     */
    async listVersionsFromQueryRaw(requestParameters: ListVersionsFromQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ChartVersionListResponse>> {
        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling listVersionsFromQuery.');
        }

        if (requestParameters.chart === null || requestParameters.chart === undefined) {
            throw new runtime.RequiredError('chart','Required parameter requestParameters.chart was null or undefined when calling listVersionsFromQuery.');
        }

        if (requestParameters.repoUrl === null || requestParameters.repoUrl === undefined) {
            throw new runtime.RequiredError('repoUrl','Required parameter requestParameters.repoUrl was null or undefined when calling listVersionsFromQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.chart !== undefined) {
            queryParameters['chart'] = requestParameters.chart;
        }

        if (requestParameters.repoUrl !== undefined) {
            queryParameters['repoUrl'] = requestParameters.repoUrl;
        }

        if (requestParameters.secretName !== undefined) {
            queryParameters['secretName'] = requestParameters.secretName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/repository/chart/versions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ChartVersionListResponseFromJSON(jsonValue));
    }

    /**
     * list versions
     */
    async listVersionsFromQuery(requestParameters: ListVersionsFromQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ChartVersionListResponse> {
        const response = await this.listVersionsFromQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}