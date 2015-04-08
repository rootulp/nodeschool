function Spy(target, method) {
  var result = { count: 0 }
  var old = target[method]

  target[method] = function() {
    result.count += 1
    return old.apply(this, arguments)
  }

  return result
}

module.exports = Spy
