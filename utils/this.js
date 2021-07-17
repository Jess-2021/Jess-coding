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

Function.prototype.myBind = function() {
  
}

var value = 2
var foo = {
  value: 1
}
function fn() {
  console.log(this.value)
}
fn.myCall(foo)