var mymodule = require('./mymodule.js')

var pathToDir = process.argv[2]
var extension = process.argv[3]
mymodule(pathToDir, extension, function(err, data){
  if (err) throw err;
  for (var i =0; i<data.length; i++){
    console.log(data[i])
  }
})