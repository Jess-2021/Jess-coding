export default class Bromise {
  constructor(fn) {
    this.status = 'PENDING'
    this.value = ''
    this.reason = ''
    this.resolveCallbackList = []
    this.rejectCallbackList = []

    const resolve = (val) => { // 🐖
      if (this.status === 'PENDING') {
        this.status = 'FULFILLED'
        this.value = val

        this.resolveCallbackList.forEach(callback => callback())
      }
    }

    const reject = (reason) => {
      if (this.status === 'PENDING') {
        this.status = 'REJECTED'
        this.value = reason

        this.rejectCallbackList.forEach(callback => callback())
      }
    }

    try {
      fn(resolve, reject) // 🐖
    } catch(err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => onFulfilled
    onRejected = typeof onRejected === 'function' ? onRejected : (err) => {throw err} // 🐖

    let promise2 = new Bromise((resolve, reject) => { // 🐖
      if (this.status === 'PENDING') {
        this.resolveCallbackList.push(() => // 🐖
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolveMidPromise(promise2, x, resolve, reject)
            } catch(err) {
              reject(err)
            }
          }, 0)
        )
        this.rejectCallbackList.push(() =>
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolveMidPromise(promise2, x, resolve, reject)
            } catch(err) {
              reject(err)
            }
          }, 0)
        )
      } else if (this.status === 'FULFILLED') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.reason) // 🐖
            resolveMidPromise(promise2, x, resolve, reject)
          } catch(err) {
            reject(err)
          }
        }, 0)
      } else {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason) // 🐖
            resolveMidPromise(promise2, x, resolve, reject)
          } catch(err) {
            reject(err)
          }
        }, 0)
      }
    })

    return promise2
  }
}

const resolveMidPromise = (promise, x, resolve, reject) => {
  if (promise === x) return reject(new Error('循环调用'))

  let caller
  if (typeof x === 'function' || (typeof x === 'object' && x !== null)) { // 🐖
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => { // 🐖
          if (caller) return
          caller = true
          resolveMidPromise(promise, y, resolve, reject)
        }, err => {
          if (caller) return;
          caller = true;
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (e) { // 🐖
      if (caller) return
      caller = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

const promise = new Bromise((resolve, reject) => {
  reject('失败');
}).then().then().then(data=>{
  console.log(data);
},err=>{
  console.log('err',err);
})


// let p1 = new Bromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('ok1');
//   }, 1000);
// })

// let p2 = new Bromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('ok2');
//   }, 1000);
// })

// Bromise.race([]).then(data => {
//   console.log('resolve', data);
// }, err => {
//   console.log('reject', err);
// })