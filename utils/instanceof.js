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

function newInstanceOf(left, right) {
  let instance = left.__proto__
  let Constructor = right.prototype

  while(instance) {
    if (instance !== Constructor) {
      instance = instance.__proto__
    } else {
      return true
    }
  }
  return false
}

function myInstanceof(left, right) {
  let rightProto = right.prototype
  let leftProto = left.__proto__
  while(leftProto) {
    if (leftProto === rightProto) return true
    leftProto = leftProto.__proto__
  }

  return false
}

function instanceOf(left, right) {
  let leftProto = left.__proto__
  let rightProto = right.prototype

  while(!leftProto) {
    if (rightProto === leftProto) {
      return true
    } else {
      leftProto = leftProto.__proto__
    }
  }
  return false
}

console.log(myInstanceof(Symbol(3243), Object))