const buf = Buffer.from('geekxia', 'ascii');

console.log(buf);
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

// 写入缓冲区
buf.write()
// 从缓冲区中读取数据
buf.toString()
// 把Buffer转换为JSON对象
buf.toJSON()
// 合并缓冲区
Buffer.concat([buf1, buf2]);
// 缓冲区比较
buf.compare(buf1);
// 缓冲区拷贝
buf.copy()
// 缓冲区裁剪
buf.slice()
// 读取缓冲区的长度
buf.length;
