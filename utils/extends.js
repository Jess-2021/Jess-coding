// 处理好「构造函数的原型」和「构造函数」和「隐式原型」的关系

var Person = function() {
  this.name = 'kevin'
}
Person.prototype.callName = function() {
  console.log(this.name)
}
function Child() {}

// 1. 原型链继承：引用类型的属性和所有实例共享，不可传参
Child.prototype = new Person()
var child1 = new Child()

// 2. 构造函数继承：在子构造函数中，将this顺便绑定在Parent上，避免所有实例共享，可以传参
// 方法都在构造函数上定义，每次创建实例都会创建一遍方法
function Child() {
  this.age = 17
  Person.call(this)
}
var child1 = new Child()

// 3. 组合继承：方法放原型上，属性放构造函数上
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function() {
  console.log(this.name)
}
function Child(age, name) {
  this.age = age
  Parent.call(this, name)
}
Child.prototype = new Parent()
Child.prototype.constructor = Child // 
var child2 = new Child(17, 'jarar')

// 3. 寄生组合继承：Child.prototype = new Parent();会调用多一次Parent构造函数，导致Child.prototype和child1都有Colors属性；
function extend(Child, Parent) {
  const F = function() {}
  F.prototype = Parent.prototype
  const instance =  new F()
  instance.constructor = Child
  Child.prototype = instance
}

function extend(Child, Parent) {
  const F = function() {}
  F.prototype = Parent.prototype
  const instance = new F()
  instance.constructor = Child
  Child.prototype = instance
}

// 4. es6继承
class Person6 {
  constructor(name) {
    this.name = name
  }
  callName() {
    console.log(this.name)
  }
}

class Child6 extends Person6 {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

console.log(new Child6('jarar', 17))