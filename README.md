# promisify2
future-proof promisify

same functionality as [promisify](https://npm.im/promisify) but using native promise constructor (node 0.11+) or bluebird.

## usage example
```js
var promisify = require('promisify2')

var foo = promisify(asyncFoo)

foo(1,2).then(function (val) {
  console.log(val)
}, handleErrors)

// equivalent to
asyncFoo(1,2, function (err, val) {
  if (err) { return handleErrors(err) }
  console.log(val)
})

```


## api


## installation

    $ npm install promisify2


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
