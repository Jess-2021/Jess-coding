const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
const resolvePromise = (pm, x, resolve, reject) => {
  // 如果是相同的引用则抛出错误
  if (pm === x) {
    return reject('循环引用');
  }
  let called;
  // 如果返回的是promise或是有then的对象
  if (x instanceof Function || (typeof x === 'object' && x !== null)) {
    try {
      let then = x.then;
      if (then instanceof Function) {
        // 说明是个有then方法的对象（函数）
        then.call(x, y => {
          // promise状态变了不能再改变
          if (called) return;
          called = true;
          resolvePromise(pm, y, resolve, reject);
        }, err => {
          if (called) return;
          called = true;
          reject(err)
        })
      } else {
        // x.then普通值，直接返回给resolve
        resolve(x);
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err)
    }
  } else {
      // 普通值，直接返回给resolve
      resolve(x);
  }
};
class MyPromise {
  constructor(fn) {
    // 1. 本身的状态，有3个 pending, fulfilled, rejected, pending且可以转为fulfilled，rejected
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // ! 处理传入异步任务时对回调函数的存储
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    // 创建promise时函数体自动执行
  // 3. resolve,reject 方法
  let resolve = x => {
    // 当状态转换时不能变更
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = x;
      // ! 对存储进来的回调进行遍历
      this.onResolvedCallbacks.forEach(fn => fn())
    }
  }
  let reject = err => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = err;
      this.onRejectedCallbacks.forEach(fn => fn())
    }
  }
    try {
      fn(resolve, reject)
    } catch (e) {
      e;
    }
  }
  // 2. then 方法
  // 2.1. 两个参数
  then(onFulfilled, onRejected) {
    // ! 如果参数不是函数的情况，
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    // ! 这里抛出错误给后面的then 捕获到
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err; }
    let promise2 = new MyPromise((resolve, reject) => {
        if (this.state === PENDING) {
          this.onResolvedCallbacks.push(() => {
              try {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e)
              }
          });

          this.onRejectedCallbacks.push(()=> {
              try {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
          });
        } else {
          try {
            let x = this.state === FULFILLED ? onFulfilled(this.value) : onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err)
          }
        }
    });
    // 返回的是一个新的promise
    return promise2;
  }
}

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve,reject)=>{
      dfd.resolve = resolve;
      dfd.reject = reject;
  })
  return dfd;
}

// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(3213)
//     resolve(231)
//   }, 1000)
// }).then().then(x => {
//   console.log(x)
//   return x
// }).then(x => {
//   console.log(x)
// },x => {
//   console.log(x)
// })

module.exports = MyPromise;