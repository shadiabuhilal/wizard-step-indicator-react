# is-json-request
![Build Status](https://github.com/shadiabuhilal/is-json-request/actions/workflows/push-workflows.yml/badge.svg)

Check if the current request is json, express js, next js, any node js server side code. (supports module and commonJS).

https://shadiabuhilal.github.io/is-json-request/

-----------

## Usage

### import is-json-request
```js
import { isJsonReq, isGetReq, isPostReq, isPutReq, isDeleteReq } from 'is-json-request';
```

Or

### require is-json-request
```js
const { isJsonReq, isGetReq, isPostReq, isPutReq, isDeleteReq } = require('is-json-request');
```

### isJsonReq
This function checks if the current request is a json request or not.

Example:

```js
if (isJsonReq(req)) {
  // Is a JSON request
}
```

### isGetReq
This function checks if the current request is a http GET method request or not.

Example:

```js
if (isGetReq(req)) {
  // Is a HTTP GET method request
}
```

### isPostReq
This function checks if the current request is a http POST method request or not.

Example:

```js
if (isPostReq(req)) {
  // Is a HTTP POST method request
}
```


### isPutReq
This function checks if the current request is a http PUT method request or not.

Example:

```js
if (isPutReq(req)) {
  // Is a HTTP PUT method request
}
```

### isDeleteReq
This function checks if the current request is a http DELETE method request or not.

Example:

```js
if (isDeleteReq(req)) {
  // Is a HTTP DELETE method request
}
```
