var fs = require('fs');
var zlib = require('zlib');

// 把 input.txt.gz 解压为 input2.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input2.txt'));

console.log('文件解压完成');