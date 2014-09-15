var fs = require('fs')
var path = require('path')

module.exports = function (pathToDir, extension, callback) {
    fs.readdir(pathToDir, function (err, list) { 
        if (err) 
            return callback(err)
        var data = []
        for (var i =0; i<list.length; i++){
            if (path.extname(list[i]) === "." + extension) {
                data.push(list[i])
            }
        }
        callback(null, data)
    })
}