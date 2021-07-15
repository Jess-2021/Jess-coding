// 立即执行表达式 立即执行匿名函数
// 模块模式

const People = (function() {
  let name = 'Jarvis'

  return {
    get() {
      return name
    },
    set(val) {
      name = val
    },
    call() {
      console.log(name)
    }
  }
}())

const nancy = new People()
nancy.set('nancy')

People.call() // ×