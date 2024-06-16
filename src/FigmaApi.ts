import * as Types from '@figma/rest-api-spec';

import * as restClient from './restClient';
import { ApiRequestMethod, ApiRequestOptions } from './types';
import { API_DOMAIN, API_VER } from './config';

export class Api {
    private personalAccessToken?: string;
    private oAuthToken?: string;
    private restApiUrl: string;

    constructor(params: { personalAccessToken: string } | { oAuthToken: string }) {
        if ('personalAccessToken' in params) {
            this.personalAccessToken = params.personalAccessToken;
        }

        if ('oAuthToken' in params) {
            this.oAuthToken = params.oAuthToken;
        }

        this.restApiUrl = `${API_DOMAIN}/${API_VER}`;
    }

    private getAuthHeaders = () => {
        const headers: Record<string, string> = {};

        if (this.personalAccessToken) {
            headers['X-Figma-Token'] = this.personalAccessToken;
        }

        if (this.oAuthToken) {
            headers['Authorization'] = `Bearer ${this.oAuthToken}`;
        }

        return headers;
    };

    request: ApiRequestMethod = async (url: string, params?: ApiRequestOptions) => {
        const headers = {
            ...params?.headers,
            ...this.getAuthHeaders(),
        };

        return restClient.request(this.restApiUrl + url, {
            ...params,
            headers,
        });
    };

    getFile = (
        fileKey: string,
        queryParams?: Omit<Types.GetFileQueryParams, 'ids'> & { ids?: string[] },
    ): Promise<Types.GetFileResponse> => {
        return this.request(`/files/${fileKey}`, {
            queryParams,
        });
    };

    getFileNodes = (
        fileKey: string,
        /**
         * @deprecated Please use `queryParams.ids` instead
         * list of node IDs to retrieve and convert
         */
        ids: string[],
        queryParams: Omit<Types.GetFileNodesQueryParams, 'ids'> & { ids: string[] } = {
            ids,
        },
    ): Promise<Types.GetFileNodesResponse> => {
        return this.request(`/files/${fileKey}/nodes`, {
            queryParams,
        });
    };

    getImage = (
        fileKey: string,
        queryParams: Types.GetImagesQueryParams,
    ): Promise<Types.GetImagesResponse> => {
        return this.request(`/images/${fileKey}`, { queryParams });
    };

    getImageFills = (fileKey: string): Promise<Types.GetImageFillsResponse> => {
        return this.request(`/files/${fileKey}/images`);
    };

    getComments = (
        fileKey: string,
        queryParams: Types.GetCommentsQueryParams,
    ): Promise<Types.GetCommentsResponse> => {
        return this.request(`/files/${fileKey}/comments`, {
            queryParams,
        });
    };

    postComment = (
        fileKey: string,
        data: Types.PostCommentRequestBody,
    ): Promise<Types.PostCommentResponse> => {
        return this.request(`/files/${fileKey}/comments`, {
            method: 'POST',
            data,
        });
    };

    deleteComments = (fileKey: string, commentId: string): Promise<Types.DeleteCommentResponse> => {
        return this.request(`/files/${fileKey}/comments/${commentId}`, {
            method: 'DELETE',
        });
    };

    getMe = (): Promise<Types.GetMeResponse> => {
        return this.request(`/me`);
    };

    getVersions = (
        fileKey: string,
        queryParams?: Types.GetFileVersionsQueryParams,
    ): Promise<Types.GetFileVersionsResponse> => {
        return this.request(`/files/${fileKey}/versions`, {
            queryParams,
        });
    };

    getTeamProjects = (teamId: string): Promise<Types.GetTeamProjectsResponse> => {
        return this.request(`/teams/${teamId}/projects`);
    };

    getProjectFiles = (
        projectId: string,
        queryParams?: Types.GetProjectFilesQueryParams,
    ): Promise<Types.GetProjectFilesResponse> => {
        return this.request(`/projects/${projectId}/files`, {
            queryParams,
        });
    };

    getTeamComponents = (
        teamId: string,
        queryParams?: Types.GetTeamComponentsQueryParams,
    ): Promise<Types.GetTeamComponentsResponse> => {
        return this.request(`/teams/${teamId}/components`, {
            queryParams,
        });
    };

    getFileComponents = (fileKey: string): Promise<Types.GetFileComponentsResponse> => {
        return this.request(`/files/${fileKey}/components`);
    };

    getComponent = (key: string): Promise<Types.GetComponentResponse> => {
        return this.request(`/components/${key}`);
    };

    getTeamComponentSets = (
        teamId: string,
        queryParams?: Types.GetTeamComponentSetsQueryParams,
    ): Promise<Types.GetTeamComponentSetsResponse> => {
        return this.request(`/teams/${teamId}/component_sets`, { queryParams });
    };

    getFileComponentSets = (fileKey: string): Promise<Types.GetFileComponentSetsResponse> => {
        return this.request(`/files/${fileKey}/component_sets`);
    };

    getComponentSet = (key: string): Promise<Types.GetComponentSetResponse> => {
        return this.request(`/component_sets/${key}`);
    };

    getTeamStyles = (
        teamId: string,
        queryParams?: Types.GetTeamStylesQueryParams,
    ): Promise<Types.GetTeamStylesResponse> => {
        return this.request(`/teams/${teamId}/styles`, {
            queryParams,
        });
    };

    getFileStyles = (fileKey: string): Promise<Types.GetFileStylesResponse> => {
        return this.request(`/files/${fileKey}/styles`);
    };

    getStyle = (key: string): Promise<Types.GetStyleResponse> => {
        return this.request(`/styles/${key}`);
    };

    getLocalVariables = (fileKey: string): Promise<Types.GetLocalVariablesResponse> => {
        return this.request(`/files/${fileKey}/variables/local`);
    };

    getPublishedVariables = (fileKey: string): Promise<Types.GetPublishedVariablesResponse> => {
        return this.request(`/files/${fileKey}/variables/published`);
    };

    postVariables = (
        fileKey: string,
        data: Types.PostVariablesRequestBody,
    ): Promise<Types.PostVariablesResponse> => {
        return this.request(`/files/${fileKey}/variables`, {
            method: 'POST',
            data,
        });
    };
}
