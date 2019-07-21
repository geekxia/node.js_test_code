var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname
    console.log('pathname: ' + pathname)
    var filename = pathname.substr(1)
    console.log('filename: ' + filename)
    fs.readFile(filename, function(err, data) {
        if(err) {
            // 找不到文件，给出404
            res.writeHead(404, {'Content-Type': 'text/html'})
        } else {
            // 成功200
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data.toString())
        }
        res.end()
    })
}).listen(8989)

console.log('server is running on localhost:8989')