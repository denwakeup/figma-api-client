import queryString from 'query-string';

import { ApiRequestOptions } from './types';

export const request = async (url: string, params?: ApiRequestOptions) => {
    const requestUrl = queryString.stringifyUrl(
        { url, query: params?.queryParams },
        { skipEmptyString: true, arrayFormat: 'comma' },
    );

    const response = await fetch(requestUrl, {
        method: params?.method ?? 'GET',
        headers: params?.headers,
        body: params?.data ? JSON.stringify(params.data) : undefined,
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};
