var express = require('express')
var fs = require('fs')
var app = express()

// 方法封装：读取文件中的JSON数据
var readUser = function(callback) {
    fs.readFile(__dirname + '/data/users.json', 'utf8', function(err, data) {
        callback && callback(JSON.parse(data))
    })
}

app.get('/listUsers', function(req, res) {
    readUser(function(data) {
        res.end(JSON.stringify(data))
    })
})

app.get('/addUser', function(req, res) {
    readUser(function(data) {
        var id = Date.now()
        var newUser = {
            id: id,
            name: 'geek'+id,
            age: 40
        }
        data['user'+id] = newUser
        res.end(JSON.stringify(data))
    })
})

app.get('/getUser/:id', function(req, res) {
    readUser(function(data) {
        var user = data['user'+req.params.id]
        res.end(JSON.stringify(user))
    })
})

app.get('/deleteUser/:id', function(req, res) {
    readUser(function(data) {
        delete data['user'+req.params.id]
        res.end(JSON.stringify(data))
    })
})

var server = app.listen('8989', '127.0.0.1', function() {
    var host = server.address().address
    var port = server.address().port
    console.log('server is running on http://%s:%s', host, port)
})