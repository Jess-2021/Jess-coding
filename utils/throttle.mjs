// let _ = require('lodash-es')
// import * as _ from 'lodash-es/lodash.js'
// 节流
function throttle(fn, wait) {
  let timer = 0

  return function() {
    const self = this // 🐷
    var args = arguments
    clearTimeout(timer) // 🐷
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, wait)
  }
}

function throttle(fn, wait) {
  let timer = 0

  return function() {
    if (!timer) {
      let self = this
      let args = arguments
      timer = setTimeout(() => {
        fn.apply(self, args)
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}

function throttle(fn, wait) {
  let timer = null
  return function() {
    let self = this
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(self, arguments)
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

container.onmousemove = throttle(getUserAction, 1000);
