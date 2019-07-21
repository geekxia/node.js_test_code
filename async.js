// async.js  测试 非阻塞

var fs = require('fs');
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    if (data) {
        console.log(data.toString());
    }
});
console.log('程序执行结束!');