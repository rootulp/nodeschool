var http = require('http')
var async = require('async')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

async.series([
  function(callback) {
    var str = http.get(url1, function callback(response){
        response.setEncoding('utf8')
        var results = []
        response.on("data", function (data) {
            results.push(data)
        })
        response.on("end", function() {
            var str = results.join("")
        })
    });
    callback(null, str);
  },
  function(callback) {
    var str2 = httpGet(url2)
    callback(null, "str2");
  },
  function(callback) {
    var str3 = httpGet(url3)
    callback(null, "str3");
  }
],
function(err, results) {
  // console.log(results[0])
  // console.log(results[1])
  // console.log(results[2])
});

