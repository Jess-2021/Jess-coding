// 创建出来的对象能访问到构造函数和原型链上的属性和方法
/**
 * @param {Function} parent 构造函数
 */
function newKeyword(Parent) {
  let obj = new Object() // 新建一个对象
  Constructor = [].shift.call(arguments) // 对象的构造函数指向传入的构造函数
  obj.__proto__ = Constructor.prototype // 对象的__proto__指向构造函数的原型
  const res = Constructor.apply(obj, arguments) // 改变this指向
  return typeof res === 'object' ? res : obj // 有返回值直接返回，没有则返回该对象
}

function People(name, age) {
  this.name = name
  this.age = age
  this.say = function() {
    console.log('i am ' + this.name)
  }
}

const nancy = newKeyword(People, 'nancy', 17)
nancy.say()