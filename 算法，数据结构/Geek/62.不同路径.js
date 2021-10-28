/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for(let i = 0; i < m; i++) {
    f[i][0] = 1
  }
  for(let i = 0; i < n; i++) {
    f[0][i] = 1
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }

  return f[m - 1][n - 1]
};
// @lc code=end

