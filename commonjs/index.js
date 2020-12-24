console.log('start require');
var lib = require('./lib.js');
console.log('end require', lib);

lib.additional = 'test'

var test = require('./lib.js');
console.log(test);