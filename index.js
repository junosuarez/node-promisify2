var Promise = require('polyfill-promise').noConflict()

function promisify(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Argument must be a function')
  }
  return function () {
    var args = Array.prototype.slice.call(arguments)
    var ctx = this
    console.log(args)
    return new Promise(function (resolve, reject) {
      var a = Array.prototype.concat.call(args, function () {
        var returned = arguments
        if (returned[0]) {
          // error
          return reject(returned[0])
        }
        if (arguments.length < 2) {
          // void return value
          return resolve()
        }
        if (arguments.length == 2) {
          // standard unary return value
          return resolve(returned[1])
        }
        else {
          // multiple return values, return as an array
          return resolve(Array.prototype.slice.call(returned,1))
        }
      })
      fn.apply(ctx, a)
    })
  }
}

module.exports = promisify