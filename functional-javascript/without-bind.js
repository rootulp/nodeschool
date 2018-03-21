var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    var args = slice.call(arguments)
    var result = [namespace].concat(args)
    return console.log.apply(console, result)
  }
}

module.exports = logger
