/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  for(let i = 0; i < s.length; i++) {
    let length = t.length
    t = t.replace(s[i], '')
    if (length === t.length) {
      return false
    }
    if (i === s.length - 1 && t.length === 0) {
      return true
    }
  }
  return false
};

var isAnagram2 = function(s, t) {
  return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
}

var bool = isAnagram2('rsat', 'tsar')
console.log(bool)
// @lc code=end

