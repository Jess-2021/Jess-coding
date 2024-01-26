/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 子串 ➡️ 连续
var lengthOfLongestSubstring = function(s) {
  let res = 0, temp = '', x = 0, y = 1
  while(x <= s.length - 1 && y <= s.length) { // 字符串考虑“ ”
    temp = s.slice(x, y)
    if (temp.length === new Set([...temp]).size) {
      res = Math.max(res, temp.length)
      y++
    } else {
      x++
      y = x + 1
    }
  }

  return res
};

var lengthOfLongestSubstring = function(s) {
  let map = {}, left = 0

  return s.split('').reduce((max, i, idx) => {
    // 顺序遍历的index一定会更大
    // 除非在集合内之前已经存入了值
    left = map[i] >= left ? map[i] + 1 : left;
    map[i] = idx
    console.log(map, left)
    return Math.max(max, idx - left + 1)
  }, 0)
}



console.log(lengthOfLongestSubstring("abcabcbb"))
// @lc code=end

