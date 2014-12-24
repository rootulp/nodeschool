var http = require('http')

var url = process.argv[2]
http.get(url, function callback(response){
    response.setEncoding('utf8')
    var results = []
    response.on("data", function (data) {
        results.push(data)
    })
    response.on("end", function() {
        var str = results.join("")
        console.log(str.length)
        console.log(str)
    })
})