/**
 * 1. then参数如果不是函数，将其忽略，在下面的then仍旧能获取到之前return的值
 * 2. then可以多次，每次都返回一个新的promise
 * 3. 如果then抛出异常，那么将这个异常作为参数传递给下一个失败回调
 * 4. 如果then参数是个promise，等这个promise执行完，成功走成功，失败走失败
 * 5. 循环引用报错
 * 6. 如果then返回值x是一个promise，x同时被resolve, reject调用，则第一次优先，其他所有调用被忽略
 */
class Promise0 {
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
    if (typeof onFulfilled !== 'function') 
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

    return new Promise0()
  }
}