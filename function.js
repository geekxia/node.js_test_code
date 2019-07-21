function execute(someFn, value) {
    someFn(value);
}

// 测试
function say(world) {
    console.log('hello ' + world);
}
execute(say, 'world');

// 使用匿名函数作为参数
execute(function(arg) {
    console.log('hello ' + arg);
}, 'ella');