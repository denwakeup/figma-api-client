import * as Types from '@figma/rest-api-spec';

export type Stringifiable = string | boolean | number | null | undefined;

export type StringifiableRecord = Record<string, Stringifiable | readonly Stringifiable[]>;

export type PickNode<T extends Types.Node['type']> = Extract<Types.Node, { type: T }>;

export type NodeType = Types.Node['type'];

export type NodeTypes = {
    [Type in NodeType]: PickNode<Type>;
};

export interface ApiRequestOptions {
    method?: 'GET' | 'POST' | 'DELETE';
    data?: Record<string, unknown>;
    queryParams?: StringifiableRecord;
    headers?: Record<string, string>;
}

export type ApiRequestMethod = <T>(url: string, params?: ApiRequestOptions) => Promise<T>;

// backward compatibility
/**
 * @deprecated Please use `GetFileResponse` instead
 */
export type GetFileResult = Types.GetFileResponse;
/**
 * @deprecated Please use `GetFileNodesResponse` instead
 */
export type GetFileNodesResult = Types.GetFileNodesResponse;
/**
 * @deprecated Please use `GetFileResponse` instead
 */
export type GetImageResult = Types.GetFileResponse;
/**
 * @deprecated Please use `GetImageFillsResponse` instead
 */
export type GetImageFillsResult = Types.GetImageFillsResponse;
/**
 * @deprecated Please use `GetCommentsResponse` instead
 */
export type GetCommentsResult = Types.GetCommentsResponse;
/**
 * @deprecated Please use `PostCommentResponse` instead
 */
export type PostCommentResult = Types.PostCommentResponse;
/**
 * @deprecated Please use `DeleteCommentResponse` instead
 */
export type DeleteCommentsResult = Types.DeleteCommentResponse;
/**
 * @deprecated Please use `GetMeResponse` instead
 */
export type GetUserMeResult = Types.GetMeResponse;
/**
 * @deprecated Please use `GetFileVersionsResponse` instead
 */
export type GetVersionsResult = Types.GetFileVersionsResponse;
/**
 * @deprecated Please use `GetTeamProjectsResponse` instead
 */
export type GetTeamProjectsResult = Types.GetTeamProjectsResponse;
/**
 * @deprecated Please use `GetProjectFilesResponse` instead
 */
export type GetProjectFilesResult = Types.GetProjectFilesResponse;
/**
 * @deprecated Please use `GetTeamComponentsResponse` instead
 */
export type GetTeamComponentsResult = Types.GetTeamComponentsResponse;
/**
 * @deprecated Please use `GetFileComponentsResponse` instead
 */
export type GetFileComponentsResult = Types.GetFileComponentsResponse;
/**
 * @deprecated Please use `GetComponentResponse` instead
 */
export type GetComponentResult = Types.GetComponentResponse;
/**
 * @deprecated Please use `GetTeamComponentSetsResponse` instead
 */
export type GetTeamComponentSetsResult = Types.GetTeamComponentSetsResponse;
/**
 * @deprecated Please use `GetFileComponentSetsResponse` instead
 */
export type GetFileComponentSetsResult = Types.GetFileComponentSetsResponse;
/**
 * @deprecated Please use `GetComponentSetResponse` instead
 */
export type GetComponentSetResult = Types.GetComponentSetResponse;
/**
 * @deprecated Please use `GetTeamStylesResponse` instead
 */
export type GetTeamStylesResult = Types.GetTeamStylesResponse;
/**
 * @deprecated Please use `GetFileStylesResponse` instead
 */
export type GetFileStylesResult = Types.GetFileStylesResponse;
/**
 * @deprecated Please use `GetStyleResponse` instead
 */
export type GetStyleResult = Types.GetStyleResponse;
