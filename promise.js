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
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    // ! 处理传入异步任务时对回调函数的存储
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    // 创建promise时函数体自动执行
  // 3. resolve,reject 方法
  let resolve = x => {
    // 当状态转换时不能变更
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.value = x;
      // ! 对存储进来的回调进行遍历
      this.onResolvedCallbacks.forEach(fn => fn())
    }
  }
  let reject = err => {
    if (this.state === 'pending') {
      this.state = 'rejected';
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
    onFulfilled = onFulfilled instanceof Function ? onFulfilled : v => v;
    // ! 这里抛出错误给后面的then 捕获到
    onRejected = onRejected instanceof Function ? onRejected : err => { throw err; }
    let promise2 = new MyPromise((resolve, reject) => {
      try {
        if (this.state === 'pending') {
          this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
              try {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e)
              }
            }, 0);
          });

          this.onRejectedCallbacks.push(()=> {
            setTimeout(() => {
              try {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
            }, 0);
          });
        } else {
            let x = this.state === 'fulfilled' ? onFulfilled(this.value) : onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
        }
      } catch (e) {
        reject(e);
      }
    });
    // 返回的是一个新的promise
    return promise2;
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000)
}).then(pro => {
  console.log('pro' + pro);
  return pro;
}).then(x => {
  console.log(x)
}, err => {
    console.log('err' + err)
})