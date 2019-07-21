var fs = require('fs')

// 同步读取文件
var data = fs.readFileSync('input.txt')
console.log(data.toString())

// 异步读取文件
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.log(err)
    }
    console.log(data.toString())
})