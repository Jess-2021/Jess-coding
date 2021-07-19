/**
 * 改变this指向
 * 对函数进行调用
 */
Function.prototype.myCall = function(content) {
  var content = content || window // 避免传入null的情况
  content[Symbol('fn')] = this

  const res = content[Symbol('fn')]([...arguments].slice(1))
  delete content[Symbol('fn')]
  return res // 有返回的值
}

/**
 * 改变this指向
 * 对函数进行调用
 * 接受一个数组参数
 */
Function.prototype.myApply = function(context, arr) {
  var context = context || window
  context[Symbol('fn')] = this
  const res = ''
  if (!arr) {
    res = context[Symbol('fn')]()
  } else {
    res = context[Symbol('fn')]([...arguments].slice(1))
  }
  delete content[Symbol('fn')]
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
    const that = this instanceof context ? this : context // 构造调用时发生在bind函数执行之前，所以this已经指向了实例

    return self.apply(that, args)
  }
  FNOP.prototype = self.prototype // ?? 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  returnFn.prototype = new FNOP()
  
  return returnFn
}

var value = 2
var foo = {
  value: 1
}
function fn() {
  console.log(this.value)
}
fn.myCall(foo)