var test = require('tape')
var stub = require('./')

test('it should do nothing', function(t) {
  var nw = stub()
  t.equals(typeof stub, 'function')
  nw(null, null, function() {
    t.end()
  })
})
