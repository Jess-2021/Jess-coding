/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort((a, b) => b.length - a.length)
  let high = strs[0].length, low = 0
  while(low < high) {
    let half = Math.floor((high - low + 1) / 2) + low
    const prefix = strs[0].substring(0, half)
    if (validate(prefix, strs)) {
      low = half
    } else {
      high = half - 1
    }
  }

  return strs[0].substring(0, low)
};

var validate = function(prefix, arr) {
  let length = prefix.length
  for(let i = 0; i < length; i++) {
    const c = prefix.charAt(i)
    for(let j = 0; j < arr.length; j++) {
      if (arr[j].charAt(i) !== c) {
        return false
      }
    }
  }

  return true
}

console.log(longestCommonPrefix(["f"]))
// @lc code=end

