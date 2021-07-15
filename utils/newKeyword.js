// 创建出来的对象能访问到构造函数和原型链上的属性和方法
/**
 * @param {Function} parent 构造函数
 */
function newKeyword(Parent) {
  let obj = new Object()
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  const res = Constructor.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
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