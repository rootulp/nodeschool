var net = require('net')

var portNumber = process.argv[2]
var server = net.createServer(function callback (socket) {
    date = new Date()
    year = date.getFullYear()
    month = date.getMonth() + 1
    day = date.getDate()
    hour = date.getHours()
    mins = date.getMinutes()
    if (month != 10 || month != 11 || month != 12) {
        month = "0" + month
    }
    var data = year + "-" + month + "-" + day + " "  + hour + ":" + mins
    socket.write(data)
    socket.end()
})

server.listen(portNumber)