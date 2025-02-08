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
