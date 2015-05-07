function curryN(fn, n) {
  n = n || fn.length;

  if (n === 1) {
    return function curriedN(nextArg) {
      return fn(nextArg);
    }
  } else {
    return function curriedN(nextArg) {
      return curryN(fn.bind(this, nextArg), n - 1);
    }
  }

}

module.exports = curryN
