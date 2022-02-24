/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 * 
 * 2
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1, right = Math.floor(num / 2) + 1
  while(left < right) {
    let mid = Math.floor((right + left) / 2)
    let res = mid * mid
    if (res === num) {
      return true
    } else if (res < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
};

var isPerfectSquare = function(x) {
  let left = 1, right = Math.floor(x / 2) + 1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    let sum = mid * mid
    if (sum === x) {
      return true
    } else if (sum < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}


console.log(isPerfectSquare(1))
// @lc code=end

