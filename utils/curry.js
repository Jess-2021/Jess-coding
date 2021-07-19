/**
 * curry
 * 1. 可以分批不限个数进行传参，没到限定的参数个数返回函数，到了返回函数的返回值
 * 2. 需要对函数参数进行收集，最后执行时统一合并
 * 3. 高端 - 通过占位符拜托顺序限制
 */

  function curry(fn, args) {
    var length = fn.length
    args = args || []

    return function() {
      var _args = args.slice(0)
      ;[].map.call(arguments, item => _args.push(item))
      if (_args.length < length) {

        return curry.call(this, fn, _args)
      } else {

        return fn.apply(this, _args)
      }
    }
  }

  var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
  });

  fn("a", "b", "c") // ["a", "b", "c"]
  fn("a", "b")("c") // ["a", "b", "c"]
  fn("a")("b")("c") // ["a", "b", "c"]
  fn("a")("b", "c") // ["a", "b", "c"]