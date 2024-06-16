import { OAUTH_BASE_URL } from './config';
import * as restClient from './restClient';

export function oAuthLink(
    clientId: string,
    redirectUri: string,
    scope: 'file_read',
    state: string,
    responseType: 'code',
) {
    return restClient.request(`${OAUTH_BASE_URL}/oauth`, {
        queryParams: {
            client_id: clientId,
            redirect_uri: redirectUri,
            scope,
            state,
            response_type: responseType,
        },
    });
}

export async function oAuthToken(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    code: string,
    grantType: 'authorization_code',
): Promise<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
}> {
    return restClient.request(`${OAUTH_BASE_URL}/api/oauth/token`, {
        queryParams: {
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            code,
            grant_type: grantType,
        },
    });
}
