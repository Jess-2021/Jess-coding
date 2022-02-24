/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 * 
 * 3
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

var uniquePaths = function(m, n) {
  let arr = new Array(n + 1).fill(1)
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      arr[j] = arr[j] + arr[j - 1]
    }
  }

  return arr[n-1]
}

var uniquePaths = function(m, n) {
  const arr = new Array(m).fill(1)
  for(let i = 1; i < n; i++) {
    for(let j = 1; j < m; j++) {
      arr[j] = arr[j - 1] + arr[j]
    }
  }

  return arr[m - 1]
}

// 已经列了一层需要忽略
console.log(uniquePaths(3, 7))
// @lc code=end

