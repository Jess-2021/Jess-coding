/**
 * Promise plus
 * 1. 三个状态：pending，fulfilled, rejected
 * 2. 构建函数构造调用时立即执行
 * 3. 有then方法，接收两个函数参数，resolve参数为成功状态的值，reject参数为失败时的原因，并返回一个Promise
 * 4. 有resolve，reject方法，调用后改变promise状态，之后不可改变
 * 5. 当有错误时，会依旧传递给下一个的then失败回调
 * 6. 当then的函数为本身promise的引用时，抛出错误
 *
 * 欠缺：
 * 1. 如果promise传的是异步函数，需要对then的回调进行存储，在异步回调函数完成后再执行（发布订阅）
 * 2. then参数为非函数，会直接传给下一个then当作返回值
 * 3. 如果then没有return， 
 * 
 * 步骤：
 * 1. 同步操作版的promise
 * 2. 异步操作版promise
 * 3. 链式调用，值穿透
 * 4. 边界情况
 */

class Promise0 {
  constructor(fn) {
    this.status = 'PENDING' // FULFILLED , REJECTED
    this.value = undefined //undefined, thenable, promise
    this.reason = undefined

    let resolve = (value) => {
      if (this.status === 'PENDING') { // status
        this.status = 'FULFILLED'
        this.value = value
      }

    }
    let reject = (reason) => {
      if (this.status === 'PENDING') {
        this.status = 'REJECTED'
        this.reason = reason
      }
    }
    try {
      fn(resolve, reject)
    } catch(err) {
      this.reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'FULFILLED') {
      onFulfilled(this.value)
    } else if (this.status === 'REJECTED') { // else {
      onRejected(this.reason)
    }
  }
}

// new Promise0((res, rej) => {
//   res(111)
// }).then(data => {
//   console.log('resolve', data)
// }, err => {
//   console.log('reject', err)
// })

class Promise1 {
  constructor(fn) {
    this.status = 'PENDING' // FULFILLED , REJECTED
    this.value = undefined
    this.reason = undefined
    this.resolveCallback = []
    this.rejectCallback = []

    let resolve = (value) => {
      if (this.status === 'PENDING') {
        this.status = 'FULFILLED'
        this.value = value

        this.resolveCallback.forEach(item => item())
      }
    }

    let reject = (value) => {
      if (this.status === 'PENDING') {
        this.status = 'REJECTED'
        this.reason = value

        this.rejectCallback.forEach(item => item())
      }
    }

    try {
      fn(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'REJECTED') {
      onRejected(this.reason) // 需要传入对应的值
    } else if (this.status === 'FULFILLED') {
      onFulfilled(this.value)
    } else {
      this.resolveCallback.push(() => {
        onFulfilled(this.value)
      })
      this.rejectCallback.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

new Promise1((res, rej) => {
  setTimeout(() => {
    rej(111)
  }, 0)
}).then(data => {
  console.log('resolve', data)
}, err => {
  console.log('reject', err)
})
