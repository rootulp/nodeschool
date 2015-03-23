function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  var result = 0;
  for(i = 0; i < args.length; i++) {
    if (Object.prototype.hasOwnProperty.call(args[i], 'quack')){
      result++;
    }
  }
  return result;
}

module.exports = duckCount
