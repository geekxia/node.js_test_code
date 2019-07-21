var fs = require('fs');

// 创建一个可读流
var rs = fs.createReadStream('input.txt');
// 创建一个可写流
var ws = fs.createWriteStream('output.txt');

// 管道读写操作：读取input.txt中的内容，并将其写入到output.txt中去
rs.pipe(ws);

console.log('程序执行完毕');