var events = require('events');
// 创建EventEmitter事件模型对象
var ee = new events.EventEmitter();

// 监听connection事件
ee.on('connection', function() {
    console.log('1-连接成功');
    ee.emit('data_received');
});

// 监听data_received事件
ee.on('data_received', function() {
    console.log('2-数据接收成功');
});

// 触发connection事件
ee.emit('connection');
console.log('3-程序执行完毕');