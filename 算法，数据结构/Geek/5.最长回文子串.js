/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s.toString()
  let res = new Array(s.length - 1).fill('')
  for(let i = 0; i < s.length - 1; i++) {
    for(let j = i; j < s.length;j++) {
      const temp = s.slice(i, j + 1)
      if (temp === temp.split('').reverse().join('') && temp.length > res[i].length) {
        res[i] = temp
      } else {
        continue
      }
    }
  }

  return res.sort((a, b) => b.length - a.length)[0]
};

// 状态：dp[i][j]  => s[i...j]是否为回文串
// 方程： dp[i][j] = dp[i+1][j-1] && s[i]===s[j]
// 初始状态：
// i===j dp[i][j] = true
// i !== j dp[i][j] === false

var longestPalindrome = function(s) {
  let res = ''
  function palindrome(s, l, r) {
    while(s[l] === s[r] && l >= 0 && r < s.length) {
      l--;
      r++
    }
    return s.substr(l + 1, r - l)
  }
  for(let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i)
    let s2 = palindrome(s, i, i+ 1)

    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  
  return res
}
console.log(longestPalindrome("cbbd"))
// @lc code=end

