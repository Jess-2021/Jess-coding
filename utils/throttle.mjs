/**
 * 1. 日期计算会立即执行一次，但停止触发后不会执行
 * 2. 定时器会再n秒后执行，停止触发后还会触发一次
 */

function dateThrottle(fn, wait) {
  let previous = 0

  return function() {
    let now = new Date().valueOf()
    context = this
    let args = arguments
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now // 第二个时间段
    }
  }
}

function timeOutThrottle(fn, wait) {
  let timer

  return function() {
    let context = this
    let args = arguments
    if (!timer) {   // 👎clearTimeout()
      timer = setTimeout(() => {
        timer = null // 👍
        fn.apply(context  , args)
      }, wait)
    }
  }
}

function throttle(fn, wait) {
  let previous = 0, // 如果不需要第一次执行，则设为现在的时间+new Date()
    timer

  function throttled() {
    context = this
    let now = +new Date()
    args = arguments
    let remain = wait - (now - previous) // 第一次执行后剩下的时间

    if (remain < 0) { // 如果没有剩余时间了, 第一次时一定为负数
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = +new Date()
      fn.apply(context, args)
    } else if (!timer) { // 不需要最后回调时，这块不需要
      timer = setTimeout(() => {
        previous = +new Date()
        timer = null
        fn.apply(context, args)
      }, remain)
    }
  }

  throttled.cancel = function() {
    clearTimeout(timer);
    previous = 0;
    timeout = null;
  }

  return throttled
}

function throttle(fn, wait) {
  let previous = 0,timer

  return function() {
    let self = this
    let now = +new Date()
    let last = wait - (now - previous)
    args = arguments  // 🐷

    // if(wait < last) {
    if(last < 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = +new Date()
      fn.apply(self, args)
    } else if (!timer) {
      timer = setTimeout(function() {
        // clearTimeout(timer) // 🐷
        previous = +new Date()
        timer = null
        fn.apply(self, args)
      }, last) // 🐷
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

container.onmousemove = throttle(getUserAction, 1000);