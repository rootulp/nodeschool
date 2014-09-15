var fs = require('fs')

var pathToFile = process.argv[2]
var buf = fs.readFileSync(pathToFile)
var str = buf.toString()
var arr = str.split('\n')
console.log(arr.length - 1)