var http = require('http')

// 用于请求的配置选项
var options = {
    host: 'localhost',
    port: '8989',
    path: '/index.html'
}

// 处理响应数据的回调函数
var callback = function(res) {
    var body = ''
    res.on('data', function(data) {
        body += data
    })
    res.on('end', function() {
        console.log(body)
    })
}

// 向服务端发送请求
var req = http.request(options, callback)
req.end()