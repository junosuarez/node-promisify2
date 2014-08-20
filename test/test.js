var mochi = require('mochi')

describe('promisify2', function () {
  var promisify = require('../')
  
  it('takes a continuation passing style function and returns a Promiser', function (done) {
    var fn = function (callback) {
      setImmediate(function () {
        callback(null, 'foo')
      })
    }

    a = promisify(fn)
    a.should.be.a('function')

    b = a()
    b.then.should.be.a('function')

    b.then(function (val) {
      val.should.equal('foo')
    })
    .finally(done)
  })

  it('throws if called without a function', function () {
    mochi.expect(function () {
      promisify('foo')
    }).to.throw(TypeError, 'Argument must be a function')
  })
})