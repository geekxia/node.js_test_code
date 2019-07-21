var fs = require('fs');
var data = '';

// 创建可读流
var rs = fs.createReadStream('input.txt');
rs.setEncoding('UTF8');

// 处理流事件 - data, end, error
rs.on('data', function(chunk) {
    data += chunk;
});
rs.on('end', function() {
    console.log(data);
});
rs.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕');