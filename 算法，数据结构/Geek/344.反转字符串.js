/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for(let i = 0, j = s.length - 1; i < j;) {
    [s[i], s[j]] = [s[j], s[i]]
    i++;
    j--
  }
};

console.log(reverseString(["h","e","l","l","o"]))
// @lc code=end

