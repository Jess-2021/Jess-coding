/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
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
// @lc code=end

