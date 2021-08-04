// let _ = require('lodash-es')
import * as _ from 'lodash-es/lodash.js'
// 防抖
function debounce(fn, wait) {
  let timer = 0

  return function() {
    const self = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, wait)
  }
}

function debounce(fn, wait) {
  let timer = null
  
  return function() {
    let self = this // 🐷
    let args = arguments
    clearTimeout(timer) // 🐷
    timer = setTimeout(function() {
      fn.apply(self, args)
    }, wait)
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

container.onmousemove = debounce(getUserAction, 1000);
