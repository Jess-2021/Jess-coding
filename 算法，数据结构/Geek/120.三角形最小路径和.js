/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 * 3
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
  let recursion = function(m, n) {
    if (m === triangle.length -1) {
      return triangle[m][n]
    }

    let left = recursion(m + 1, n)
    let right = recursion(m + 1, n+ 1)

    return Math.min(left, right) + triangle[m][n]
  }

  return recursion(0, 0)
}

var minimumTotal = function(triangle) {
  var recursion = function(m, n) {
    if (m === triangle.length - 1) {
      return triangle[m][n]
    }

    let left = recursion(m + 1, n) + triangle[m][n]
    let right = recursion(m + 1, n + 1) + triangle[m][n]

    return Math.min(left, right)
  }

  return recursion(0, 0)
}

// var minimumTotal = function(triangle) {
//   for(let i = triangle.length - 2; i >= 0; i--) {
//     for(let j = 0; j < triangle[i].length; j++) {
//       triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
//     }
//   }

//   return triangle[0][0]
// }

var minimumTotal = function(triangle) {
  for(let i = triangle.length - 2; i >= 0; i--) {
    for(let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j]
    }
  }

  return triangle[0][0]
}



console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
// @lc code=end

