function reduce(arr, fn, initial) {
  return (function reduction(i, val) {
    if (i === arr.length){
      return val;
    } else {
      return reduction(i+1, fn(val, arr[i], i, arr));
    }
  })(0, initial)
}

module.exports = reduce
