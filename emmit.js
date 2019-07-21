var events = require('events');

var ee = new events.EventEmitter();

ee.on('some', function(arg1, arg2) {
    console.log(arg1, arg2);
});

ee.on('some', function(arg1, arg2) {
    console.log(arg1, arg2);
});

ee.on('some', function(arg1, arg2) {
    console.log(arg1, arg2);
});

ee.emit('some', '参数1', '参数2');