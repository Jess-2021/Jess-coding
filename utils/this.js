/**
 * 改变this指向
 * 对函数进行调用
 */
Function.prototype.myCall = function(content) {
  var content = content || window // 避免传入null的情况
  content.fn = this

  const res = content.fn([...arguments].slice(1))
  delete content.fn
  return res // 有返回的值
}

Function.prototype.myCall = function(ct) {
  let context = [].shift.call(arguments) || window
  context.fn = this
  let res = context.fn(...arguments)
  delete context.fn

  return res
}

/**
 * 改变this指向
 * 对函数进行调用
 * 接受一个数组参数
 */

Function.prototype.myApply = function(context, arr) {
  var context = context || window
  context.fn = this
  let res = null
  if (Array.isArray(arr)) {
    let args = arr.map((_, i) => 'arr[' + i + ']')
    res = eval('context.fn(' + args + ')')
  } else {
    delete context.fn
    throw new Error('TypeError')
  }
  delete context.fn

  return res
}


/**
 * bind
 * 1. 改变this指向
 * 2. 返回一个函数
 * 3. 参数合并
 * 4. 返回的函数可以充当构造函数进行构造调用，这时返回的函数的原型需要指向构造函数的原型
*/
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  let self = this // 原本的this为调用bind函数时的this
  let midArg = [].slice.call(arguments, 1)

  function FNOP () {}
  function returnFn() {
    const args = midArg.concat([...arguments]) // 函数柯里化
    const that = this instanceof FNOP ? this : context // 构造调用时发生在bind函数执行之前，所以this已经指向了实例  + 1

    return self.apply(that, args)
  }
  FNOP.prototype = self.prototype // ?? 修改返回函数的 prototype 为调用bind的函数的 prototype，实例就可以继承绑定函数的原型中的值，将调用bind的函数当作构造函数
  returnFn.prototype = new FNOP()

  return returnFn
}

Function.prototype.myBind = function(context) {
  let self = this
  let args = [...arguments].slice(1)
  function FNOP() {}
  function res() {
    let finArg = args.concat([...arguments])
    return self.apply(this instanceof FNOP ? this : context, finArg) 
  }
  FNOP.prototype = this.prototype
  res.prototype = new FNOP()

  return res
}

Function.prototype.myBind = function(context) {
  let self = this
  let midArg = [...arguments].slice(1)
  function FNOP() {}
  let binder = function() {
    let args = midArg.concat([...arguments])
    return self.apply(this instanceof FNOP ? this : context, args)
  }
  FNOP.prototype = this.prototype
  binder.prototype = new FNOP()

  return binder
}

// text 构造调用
var value = 2
var foo = {
  value: 1
}
function Fn(age) {
  this.age = age
  console.log(this.age, this.value)
}
var FNOP = Fn.myBind(foo)

console.log(new FNOP(18))
