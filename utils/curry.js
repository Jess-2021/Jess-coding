/**
 * curry
 * 1. 可以分批不限个数进行传参，没到限定的参数个数返回函数，到了返回函数的返回值
 * 2. 需要对函数参数进行收集，最后执行时统一合并
 * 3. 高端 - 通过占位符拜托顺序限制
 */

// 要点：
// 1. this => apply
// 2. 参数的收集并返回

function curry(fn, args) {
  var length = fn.length // 😒
  args = args || [] // 😒

  return function() {
    var _args = args.slice(0)
    ;[].map.call(arguments, item => _args.push(item))
    if (_args.length < length) {

      return curry.call(this, fn, _args) // 😒
    } else {

      return fn.apply(this, _args)
    }
  }
}

function curry(fn, args) {
  let leng = fn.length
  args = args || []

  return function() {
    let _args = args.slice(0)
    ;[].forEach.call(arguments, params => _args.push(params))
    if (_args.length >= leng) {
      return fn.apply(this, _args)
    } else {
      return curry.call(this, fn, _args)
    }
  }
}

function curry(fn, args) {
  args = args || []
  let length = fn.length

  return function() {
    let tempArgs = args.slice(0)
    ;[].forEach.call(arguments, params => tempArgs.push(params))
    if (tempArgs.length >= length) {
      return fn.apply(this, tempArgs)
    } else {
      return curry.call(this, fn, tempArgs)
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