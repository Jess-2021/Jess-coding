// 查找原型链上是否有构造函数的原型

function newInstanceOf(left, right) {
  let instanceProto = left.__proto__
  let constructor = right.prototype

  while(true) {
    if (instanceProto === constructor) {
      return true
    } else if (instanceProto === null) {
      return false
    } else {
      instanceProto = instanceProto.__proto__
    }
  }
}

console.log(newInstanceOf(Symbol(3243), Object))