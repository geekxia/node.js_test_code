var express = require('express')
var util = require('util')
var cookieParser = require('cookie-parser')

var app = express()

// 使用cookie-parser中间件
app.use(cookieParser())

// Cookie管理
app.get('/', function(req, res) {
    // 读取请求对象中的cookie数据
    var cookie = util.inspect(req.cookies)
    console.log('Cookies: ' + cookie)
    res.end(cookie.toString())
})

var server = app.listen('8989', '127.0.0.1', function() {
    var host = server.address().address
    var port = server.address().port
    console.log('server is running on http://%s:%s', host, port)
})