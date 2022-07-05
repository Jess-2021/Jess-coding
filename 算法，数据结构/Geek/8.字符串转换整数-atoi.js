/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  str = s.trim()
  if (!/[\d+-]/.test(str[0])) return 0

  const number = Number(str.match(/[+-]?\d*/))
  if (Number.isNaN(number)) return 0
  
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = - (2 ** 31);
  if (number > MAX_INT) return MAX_INT
  if (number < MIN_INT) return MIN_INT
  return number
};

console.log(myAtoi("21474836460"))
// @lc code=end

