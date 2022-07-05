/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let idx = digits.length - 1
  while(true) {
    digits[idx] += 1
    if (digits[idx] < 10) return digits
    digits[idx] = 0
    idx--
    if (idx === -1) {
      digits.unshift(1)
      return digits
    }
  }
};

// bigInt 内置 + 1n 同 四则运算
var plusOne = function(digits) {
  return String(BigInt(digits.map(String).join('')) + 1n).split('').map(Number)
}
console.log(plusOne([9,9,9]))
// @lc code=end

