/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  let res = ''
  for(let i of s) {
    let n = i.charCodeAt()
    res += n > 64 && n <= 90 ? String.fromCharCode(n + 32) : i
  }

  return res
};
// @lc code=end

