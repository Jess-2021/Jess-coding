/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 * 
 * 3
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 二分查找
var mySqrt = function(x) {
  let left = 1, right = Math.floor(x / 2) + 1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    let res = mid * mid
    if (res === x) {
      return mid
    } else if (res < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
};

// 牛顿迭代
var mySqrt = function(x) {
  let mid = x
  while(mid * mid > x) {
    mid = ((mid + x / mid) / 2) | 0
    mid = Math.floor((mid + x / mid) / 2)
  }

  return mid
}

var mySqrt = function(x) {
  let left = 0, right = x
  while(left <= right) {
    mid = Math.floor((right + left) / 2)
    let res = mid * mid
    if (res === x) {
      return mid
    } else if (res < x) {
      left = mid
    } else {
      right = mid
    }
  }

  return right
}

var mySqrt = function(x) {
  let left = 0, right = Math.floor(x / 2) + 1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    let sum = mid * mid
    if (sum === x) {
      return mid
    } else if (x > sum) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
}

console.log(mySqrt(8))
// @lc code=end

