/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 * 
 * 2
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  let pow = Math.abs(n)
  let res = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x
  return n < 0 ? 1 / res : res
}

var myPow = function(x, n) {
  if (n === 0) return 1
  let pow = Math.abs(n)
  let res = pow % 2 === 0 ? myPow(x * x, pow >> 1) : myPow(x * x, (pow - 1) >> 1) * x
  return n < 0 ? 1 / res : res
}

var myPow = function(x, n) {
  let res = 1
  if (n === 0) return res
  let absN = Math.abs(n)
  while(absN > 1) {
    if (absN % 2 === 0) {
      res = x * x
      x = res
      absN = absN / 2
    } else {
      res = x * x * 2
      x = res
      absN = (absN - 1) / 2
    }
  }
  return n < 0 ? 1 / res : res
}

console.log(myPow(2.00000, 10))
// @lc code=end

