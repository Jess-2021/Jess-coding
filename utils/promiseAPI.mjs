import Bromise from './promise++.mjs'

Bromise.resolve = function(arg) {
  if (arg instanceof Bromise) { return arg }
  return new Bromise((res) => res(arg))
}

// 构造函数方法
Bromise.reject = function(reason) {
  return new Bromise((resolve, reject) => reject(reason))
}

// Promise.resolve(new Bromise((res, rej) => {
//   setTimeout(() => {
//     res(111)
//   }, 1000)
// })).then(data => console.log(data), err => console.log(err))

// 静态实例方法

Bromise.prototype.catch = function(reason) {
  return this.then(_ => {}, reject => reject(reason))
}

// finally会等待上一个promise执行完毕，再将结果传到成功或者失败的promise里;
// 如果传入的是promise，就等promise执行完毕 !
Bromise.prototype.finally = function(callback) {
  return this.then((value) => {
    new Bromise.resolve(callback()).then(() => value) // 避免传入的是promise
  }, reason => {
    new Bromise.reject(callback()).then(() => { throw reason })
  })
}

// new Bromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('ok1');
//   }, 1000);
// }).finally(() => {
//   console.log('finally')
// })

// 传入一个数组，如果没有出现错误等待全部处理完才返回，如果全部成功则返回处理成功的结果集
// 如果出现失败，则直接返回
Bromise.all = (fns) => {
  if (!Array.isArray(fns)) {throw new Error('TypeError')}
  return new Bromise((resolve, reject) => { // 返回一个promise
    let result = []
    let count = 0 // 计数
    fns.forEach((fn, index) => {
      count++
      if (fn && typeof fn.then === 'function') {
        fn.then(value => {
          result[index] = value
          if (count === fns.length) { // 判断长度是否够
            resolve(result)
          }
        }, reason => {
          reject(reason)
        })
      } else {
        result[index] = fn
        if (count === fns.length) {
          resolve(result)
        }
      }
    })
  })
}

// 传入一个数组，直到元素的promise处理完，返回一个结果集
Bromise.allSettled = (fns) => {
  if (!Array.isArray(fns)) throw new Error('typeError')
  return new Bromise((resolve, reject) => {
    if (!fns.length) resolve(res)
    let leng = fns.length, res = [], count = 0
    fns.forEach((fn, index) => {
      count++
      if (fn && typeof fn.then === 'function') {
        fn.then(value => {
          res[index] = {
            value,
            status: 'fulfilled'
          }
        }, reason => {
          res[index] = {
            reason,
            status: 'rejected'
          }
        }).finally(() => {
          if (count === leng) resolve(res)
        })
      } else {
        res[index] = {
          value: fn,
          status: 'fulfilled'
        }
        if (count === leng) resolve(res)
      }
    })
  })
}

// 传入一个数组，当有元素返回resolve后返回true
Bromise.any = (fns) => {
  if (!Array.isArray(fns)) { throw new Error('typeError') }
  return new Bromise((resolve, reject) => {
    let count = 0
    if (!fns.length) reject('all promise were reject')
    fns.forEach(fn => {
      if (fn && typeof fn.then === 'function') {
        fn.then(value => {
          resolve(value)
        }, err => {
          count += 1
          if (count === fns.length) reject(new Error('all promise were reject'))
        })
      } else {
        resolve(fn)
      }
    })
  })
}

// 传入一个数组，返回最快返回结果的元素
Bromise.race = (fns) => {
  return new Bromise((resolve, reject) => {
    fns.forEach(fn => {
      if (fn && typeof fn.then === 'function') {
        fn.then(resolve, reject)
      } else {
        resolve(fn)
      }
    })
  })
}

let p1 = new Bromise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok1');
  }, 1000);
})

let p2 = new Bromise((resolve, reject) => {
  setTimeout(() => {
    reject('ok2');
  }, 1000);
})

// Bromise.reject(111).catch((err) => {
//   console.log(err)
// })

Bromise.race([Bromise.reject(111)]).then(data => {
  console.log('resolve', data);
}, err => {
  console.log('reject', err);
})