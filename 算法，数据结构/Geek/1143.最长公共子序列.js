/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 *
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length, n = text2.length
  const f = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for(let i = 1; i <= m; i++) {
    const c1 = text1[i - 1]
    for(let j = 1; j <= n; j++) {
      const c2 = text2[j - 1]
      if (c1 === c2) {
        f[i][j] = f[i - 1][j - 1] + 1
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i][j - 1])
      }
    }
  }

  return f[m][n]
};

var longestCommonSubsequence = function(text1, text2) {
  const t1 = text1.length, t2 = text2.length
  const arr = new Array(t1 + 1).fill(0).map(i => new Array(t2 + 1).fill(0))
  for(let i = 1; i <= t1; i++) {
    const item = text1[i - 1]
    for(let j = 1; j <= t2; j++) {
      const item2 = text2[j - 1]
      if (item2 === item) {
        arr[i][j] = arr[i - 1][j - 1] + 1
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
      }
    }
  }

  return arr[t1][t2]
}

console.log(longestCommonSubsequence('abcde', 'ace'))

// @lc code=end

