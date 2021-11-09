/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let dp = triangle, n = dp.length; m = dp[n - 1].length
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    }
  }

  return dp[0][0]
};

var minimumTotal = function(triangle) {
  length = triangle.length, temp = new Array(length).fill(0).map(arr => new Array(length).fill(0))
  let recursion = function(m, n) {
    if (temp[m][n]) return temp[m][n]
    if (m === length - 1) {
      return temp[m][n] = triangle[m][n]
    }
    let left = recursion(m + 1, n)
    let right = recursion(m + 1, n + 1)

    return temp[m][n] = Math.min(left, right) + triangle[m][n]
  }
  return recursion(0, 0)
}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
// @lc code=end

