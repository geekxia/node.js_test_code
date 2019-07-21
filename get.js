var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    // 使用url模块处理GET请求中请求参数
    var data = url.parse(req.url, true)
    console.log(data)
    res.write('网站名：' + data.host)
    res.write('\n')
    res.write('网站URL：' + data.path)
    res.end()
}).listen(8899)

console.log('服务器已启动')