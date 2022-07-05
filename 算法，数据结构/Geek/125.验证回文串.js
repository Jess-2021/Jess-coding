/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let temp = s.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase()
  return temp === [...temp].reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// @lc code=end

