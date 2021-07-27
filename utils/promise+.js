/**
 * 1. then参数如果不是函数，将其忽略，在下面的then仍旧能获取到之前return的值
 * 2. then可以多次，每次都返回一个新的promise
 * 3. 如果then抛出异常，那么将这个异常作为参数传递给下一个失败回调
 * 4. 如果then参数是个promise，等这个promise执行完，成功走成功，失败走失败
 * 5. 循环引用报错
 * 6. 如果then返回值x是一个promise，x同时被resolve, reject调用，则第一次优先，其他所有调用被忽略
 * 7. 如果then的参数是函数，且then是一个常数，直接resolve结果
 * 8. Promise.then是微任务，可以用mutationObserver再者setTimeout实现
 */
class Promise0 {
  constructor(fn) {
    this.status = 'PENDING' // FULFILLED REJECTED
    this.value = undefined
    this.reason = undefined

    this.resolveCallbacks = []
    this.rejectCallbacks = []

    let resolve = (value) => {
      if (this.status === 'PENDING') {
        this.status = 'FULFILLED'
        this.value = value
        this.resolveCallbacks.forEach(callback => callback())
      }
    }

    let reject = (reason) => {
      if (this.status === 'PENDING') {
        this.status = 'REJECTED'
        this.reason = reason
        this.rejectCallbacks.forEach(callback => callback())
      }
    }

    try {
      fn(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    // 传入可能为thenAble, Promise, 值或者引用
    // 如果是then(111)的情况，也会包装成一个promise，然后resolve出去
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => onFulfilled
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err}

    let promise2 = new Promise0((resolve, reject) => { // onFulfilled, onRejected
      if (this.status === 'PENDING') {
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              handleMidPromise(promise2, x, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              handleMidPromise(promise2, x, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
      } else if (this.status === 'FULFILLED') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            handleMidPromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      } else {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            handleMidPromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      }
    })

    return promise2
  }
}

let handleMidPromise = (promise, x, resolve, reject) => {
  if (x === promise) reject(new error('同一个promise'))
  let called // If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
  if (x === 'function' || (typeof x === 'object' && x !== null)) {
    try {
      // 说明还有更深的Promise
      // 同时为了判断status变了就不应该再改变状态了
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          // 递归解析的过程（因为可能 promise 中还有 promise）
          handleMidPromise(promise, y, resolve, reject) // 进行判断的需要和刚开始的传入的Promise做比较
        }, err => {
          if (called) return;
          called = true;
          reject(err)
        })
      } else {
        // 如果then不是个函数（不存在then），说明是常量，直接resolve
        resolve(x)
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(e)
    }
  } else {
    resolve(x)
  }
}

const promise = new Promise0((resolve, reject) => {
  reject('失败');
}).then().then().then(data=>{
  console.log(data);
},err=>{
  console.log('err',err);
})
