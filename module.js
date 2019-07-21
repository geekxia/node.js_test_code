module.exports = function() {
    var name;
    this.setName = function(arg) {
        name = arg;
    };
    this.getName = function() {
        console.log('hello ' + name);
    };
}