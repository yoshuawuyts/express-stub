# express-stub
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Create express stub middleware for testing purposes. Plays nicely with
`proxyquire`.

## Installation
```bash
$ npm install express-stub
```

## Usage
```js
const stub = require('express-stub')
const express = require('express')
const app = express()

app.use(stub())
app.listen()
```

## See Also
- [proxyquire](http://ghub.io/proxyquire)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/express-stub.svg?style=flat-square
[npm-url]: https://npmjs.org/package/express-stub
[travis-image]: https://img.shields.io/travis/yoshuawuyts/express-stub.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/express-stub
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/express-stub.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/express-stub?branch=master
[downloads-image]: http://img.shields.io/npm/dm/express-stub.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/express-stub
