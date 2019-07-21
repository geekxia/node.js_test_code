var http = require('http');
var url = require('url');

function start(routeFn) {
    function onRequest(req, res) {
        // 使用 url模块解析 req.url
        var pathname = url.parse(req.url).pathname;
        // 执行路由函数
        routeFn(pathname);
        // res响应数据
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('hello world');
        res.end();
    }
    http.createServer(onRequest).listen(8899);
    console.log('Server running at http://172.0.0.1:8899/');
}

exports.start = start
