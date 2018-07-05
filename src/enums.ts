export enum EVENTS {
  GATEWAY_UPDATED = 'GATEWAY_UPDATED',
  GATEWAY_READY = 'GATEWAY_READY',
  ADD_ROUTE = 'ADD_ROUTE'
}

export enum FRAGMENT_RENDER_MODES {
  PREVIEW = 'preview',
  STREAM = 'stream'
}

export enum RESOURCE_INJECT_TYPE {
  INLINE,
  EXTERNAL
}

export enum RESOURCE_TYPE {
  CSS,
  JS
}

/**
 * Will be changed with PuzzleLib asset injections
 * @deprecated
 */
export enum RESOURCE_LOCATION {
  HEAD,
  BODY_START,
  BODY_END,
  CONTENT_START,
  CONTENT_END
}

export enum REPLACE_ITEM_TYPE {
  ASSET,
  CONTENT,
  PLACEHOLDER,
  CHUNKED_CONTENT,
  MODEL_SCRIPT
}

export enum HTTP_METHODS {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
}

export enum RESOURCE_JS_EXECUTE_TYPE {
  ASYNC = 'async',
  DEFER = 'defer',
  SYNC = ''
}

/**
 * PuzzleLib will replace this feature.
 * @deprecated
 * @type {string}
 */
export const CONTENT_REPLACE_SCRIPT = `<script>function $p(p,c){var z = document.querySelector(c),r = z.innerHTML;z.parentNode.removeChild(z);document.querySelector(p).innerHTML=r}</script>`;
export const DEFAULT_MAIN_PARTIAL = `main`;

export const HEALTHCHECK_PATH = '/healthcheck';

export enum HTTP_STATUS_CODE {
  OK = 200,
  MOVED_PERMANENTLY = 301,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export enum INJECTABLE {
  MIDDLEWARE,
  HANDLER,
  CUSTOM
}

export enum TRANSFER_PROTOCOLS {
  H2 = 'h2',
  SPDY = 'spdy/3.1',
  HTTP1 = 'http/1.1'
}
