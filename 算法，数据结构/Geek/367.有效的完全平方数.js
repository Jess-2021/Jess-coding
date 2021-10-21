/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
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
// @lc code=end

