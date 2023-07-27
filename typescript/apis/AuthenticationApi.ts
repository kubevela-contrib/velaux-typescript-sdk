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
  V1AdminConfiguredResponse,
  V1DexConfigResponse,
  V1GetLoginTypeResponse,
  V1InitAdminRequest,
  V1InitAdminResponse,
  V1LoginRequest,
  V1LoginResponse,
  V1LoginUserInfoResponse,
  V1RefreshTokenResponse,
} from '../models/index';
import {
    BcodeBcodeFromJSON,
    BcodeBcodeToJSON,
    V1AdminConfiguredResponseFromJSON,
    V1AdminConfiguredResponseToJSON,
    V1DexConfigResponseFromJSON,
    V1DexConfigResponseToJSON,
    V1GetLoginTypeResponseFromJSON,
    V1GetLoginTypeResponseToJSON,
    V1InitAdminRequestFromJSON,
    V1InitAdminRequestToJSON,
    V1InitAdminResponseFromJSON,
    V1InitAdminResponseToJSON,
    V1LoginRequestFromJSON,
    V1LoginRequestToJSON,
    V1LoginResponseFromJSON,
    V1LoginResponseToJSON,
    V1LoginUserInfoResponseFromJSON,
    V1LoginUserInfoResponseToJSON,
    V1RefreshTokenResponseFromJSON,
    V1RefreshTokenResponseToJSON,
} from '../models/index';

export interface ConfigureAdminRequest {
    body: V1InitAdminRequest;
}

export interface LoginRequest {
    body: V1LoginRequest;
}

/**
 *
 */
export class AuthenticationApi extends runtime.BaseAPI {

    /**
     * check admin is configured
     */
    async adminConfiguredRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1AdminConfiguredResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/admin_configured`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AdminConfiguredResponseFromJSON(jsonValue));
    }

    /**
     * check admin is configured
     */
    async adminConfigured(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1AdminConfiguredResponse> {
        const response = await this.adminConfiguredRaw(initOverrides);
        return await response.value();
    }

    /**
     * initialize admin
     */
    async configureAdminRaw(requestParameters: ConfigureAdminRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1InitAdminResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling configureAdmin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/auth/init_admin`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1InitAdminRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1InitAdminResponseFromJSON(jsonValue));
    }

    /**
     * initialize admin
     */
    async configureAdmin(requestParameters: ConfigureAdminRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1InitAdminResponse> {
        const response = await this.configureAdminRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get Dex config
     */
    async getDexConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DexConfigResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/dex_config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DexConfigResponseFromJSON(jsonValue));
    }

    /**
     * get Dex config
     */
    async getDexConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DexConfigResponse> {
        const response = await this.getDexConfigRaw(initOverrides);
        return await response.value();
    }

    /**
     * get login type
     */
    async getLoginTypeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1GetLoginTypeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/login_type`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1GetLoginTypeResponseFromJSON(jsonValue));
    }

    /**
     * get login type
     */
    async getLoginType(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1GetLoginTypeResponse> {
        const response = await this.getLoginTypeRaw(initOverrides);
        return await response.value();
    }

    /**
     * get login user detail info
     */
    async getLoginUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1LoginUserInfoResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/user_info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LoginUserInfoResponseFromJSON(jsonValue));
    }

    /**
     * get login user detail info
     */
    async getLoginUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1LoginUserInfoResponse> {
        const response = await this.getLoginUserInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * handle login request
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1LoginResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1LoginRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LoginResponseFromJSON(jsonValue));
    }

    /**
     * handle login request
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1LoginResponse> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * refresh token
     */
    async refreshTokenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1RefreshTokenResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/refresh_token`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RefreshTokenResponseFromJSON(jsonValue));
    }

    /**
     * refresh token
     */
    async refreshToken(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1RefreshTokenResponse> {
        const response = await this.refreshTokenRaw(initOverrides);
        return await response.value();
    }

}