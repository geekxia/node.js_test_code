var mysql = require('mysql')
var conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test'
})

conn.connect()

var sql4 = 'DELETE FROM tools WHERE id=4'
conn.query(sql4, function(err, res) {
    if (err) throw err
    console.log('删除数据：', res)
})

conn.end()