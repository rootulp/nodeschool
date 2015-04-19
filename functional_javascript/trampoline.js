function repeat(operation, num) {
  return function() {
    if (num > 0) {
      operation()
      return repeat(operation, num - 1)
    }
  }
}

function trampoline(fn) {
  while(fn) {
    fn = fn()
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num)
  })
}
