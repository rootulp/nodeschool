var fs = require('fs')
var path = require('path')

var pathToDir = process.argv[2]
var extension = process.argv[3]
fs.readdir(pathToDir, function callback (err, list) { 
    if (err) throw err;
    for (var i =0; i<list.length; i++){
        if (path.extname(list[i]) === "." + extension) {
            console.log(list[i])
        }
    }
});