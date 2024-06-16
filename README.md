[![npm](https://img.shields.io/npm/v/figma-api-client)](https://www.npmjs.com/package/figma-api-client)

# figma-api-client

> Based on [didoo/figma-api](https://github.com/didoo/figma-api)

Official docs [Figma API](https://www.figma.com/developers/docs).

## Install

`npm i figma-api-client`

## Usage

```ts
import * as Figma from 'figma-api-client';

const api = new Figma.Api({
    personalAccessToken: 'access token',
});

const file = await api.getFile('file key');
```

## Api

### Helpers

`Api.request<T>(url, params): Promise<T>` - Make request with auth headers.

### Authentication

```ts
new Api({ personalAccessToken } | { oAuthToken });
```

Creates new Api object with specified `personal` or `oAuthToken`.
[Documentation on how to get tokens](https://www.figma.com/developers/api#authentication)

### Helpers

-   `oAuthLink` - Returns link for OAuth auth flow.
    User should open this link, allow access and he will be redirected to `redirect_uri?code=<code>`.
    Then you should use `oAuthToken` method to get `access token`.
-   `oAuthToken` - Returns `access token` info from oauth code (see `oAuthLink` method).

### Figma files

-   `Api.getFile` - [Require file data](https://www.figma.com/developers/api#get-files-endpoint)
-   `Api.getFileNodes` - [Require file nodes data](https://www.figma.com/developers/api#get-file-nodes-endpoint)
-   `Api.getImage` - [Renders images](https://www.figma.com/developers/api#get-images-endpoint)
-   `Api.getImageFills` - [Returns download links for all images present in image fills in a document.](https://www.figma.com/developers/api#get-image-fills-endpoint)

### Comments

-   `Api.getComments` - [List of comments](https://www.figma.com/developers/api#get-comments-endpoint)
-   `Api.postComment` - [Posts a new comment on the file](https://www.figma.com/developers/api#post-comments-endpoint).
-   `Api.deleteComment` - [Deletes a specific comment](https://www.figma.com/developers/api#delete-comments-endpoint)

### Users

-   `Api.getMe` - [You can use the Users Endpoint](https://www.figma.com/developers/api#users-endpoints)

### Version history

-   `Api.getVersions` - [List of the version](https://www.figma.com/developers/api#get-file-versions-endpoint)

### Projects

-   `Api.getTeamProjects` - [Lists the projects](https://www.figma.com/developers/api#get-team-projects-endpoint)
-   `Api.getProjectFiles` - [List the files](https://www.figma.com/developers/api#get-project-files-endpoint)

### Components and styles

-   `Api.getTeamComponents` - [Get a paginated list of published components](https://www.figma.com/developers/api#get-team-components-endpoint)
-   `Api.getFileComponents` - [Get a list of published components](https://www.figma.com/developers/api#get-file-components-endpoint)
-   `Api.getComponent` - [Get metadata on a component by key.](https://www.figma.com/developers/api#get-component-endpoint)
-   `Api.getTeamComponentSets` - [Get a paginated list of published component_sets](https://www.figma.com/developers/api#get-team-component-sets-endpoint).
-   `Api.getFileComponentSets` - [Get a list of published component_sets](https://www.figma.com/developers/api#get-file-component-sets-endpoint)
-   `Api.getComponentSet` - [Get metadata on a component_set by key.](https://www.figma.com/developers/api#get-component-sets-endpoint)
-   `Api.getTeamStyles` - [Get a paginated list of published styles](https://www.figma.com/developers/api#get-team-styles-endpoint).
-   `Api.getFileStyles` - [Get a list of published styles](https://www.figma.com/developers/api#get-file-styles-endpoint)
-   `Api.getStyle` - [Get metadata on a style by key.](https://www.figma.com/developers/api#get-style-endpoint)

### Variables

-   `Api.getLocalVariables` - [Get local variables.](https://www.figma.com/developers/api#get-local-variables-endpoint)
-   `Api.getPublishedVariables` - [Get published variables.](https://www.figma.com/developers/api#get-published-variables-endpoint)
-   `Api.postVariables` - [Bulk create, update, and delete variables and variable collections.](https://www.figma.com/developers/api#post-variables-endpoint)

## File types

[All types with description](https://github.com/figma/rest-api-spec/blob/main/dist/api_types.ts)

## Helpers

-   `isEffectShadow` - Check if effect is one of shadow effects.
-   `isEffectBlur` - Check if effect is one of blur effects.
-   `isPaintSolid` - Check if paint is one of pain types.
-   `isPaintGradient` - Check if paint is one of pain types.
-   `isPaintImage` Check if paint is one of pain types.
-   `isNodeType` - Check if node is type of specified node.
