
// process对象提供的 exit事件
process.on('exit', function(code) {
    setTimeout(function() {
        console.log('该代码不会执行');
    }, 0);

    console.log('退出码为：' + code);
});

// process对象提供了一系列有用的属性
console.log(process.platform)
console.log(process.version)

// process对象提供了一系列有用的方法
console.log(process.cwd())
console.log(process.memoryUsage())