var hello = require('./hello')
var module = require('./module');

hello.world()
hello.world2()

var m = new module()
m.setName('lucy')
m.getName()