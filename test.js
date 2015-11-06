'use strict'

var test = require('tape')
var pair = require('./')

test(function (t) {
  t.deepEqual(pair('foo', 'bar'), {
    foo: 'bar'
  })
  t.end()
})
