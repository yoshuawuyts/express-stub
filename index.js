/**
 * Expose `stub`
 */
module.exports = stub

/**
 * Stub an express module.
 *
 * @return {Function}
 * @api public
 */
function stub() {
  return function(err, res, next) {
    next()
  }
}
