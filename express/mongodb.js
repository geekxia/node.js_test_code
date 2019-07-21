var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err
    console.log('数据库连接成功')
    
    var dbase = db.db('test')
    // 创建集合
    dbase.createCollection('site', function(err, res) {
        if (err) throw err
        console.log('集合创建成功')
        db.close()
    })
})