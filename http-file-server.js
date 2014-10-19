var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var file  = process.argv[3]

var fileStream = fs.createReadStream(file);

var server = http.createServer(function (req, res) {
  return fileStream;
})

server.listen(8000)