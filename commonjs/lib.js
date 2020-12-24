console.log('hello geekbang');

exports.hello = 'world';

exports.add = function (a, b) {
  return a + b;
}

exports.geekbang = { hello: 'world'}

module.exports = function minus(a, b) {
  return a - b;
}

setTimeout(() => {
  console.log(exports);
  console.log(module.exports);
}, 2000);