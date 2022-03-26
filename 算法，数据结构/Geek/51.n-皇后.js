/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n === 1) return ['Q']
  let res = []
  let col = new Set(), left = new Set(), right = new Set()

  var dfs = function(res, row, cur = []) {
    if (row >= n) {
      res.push(cur.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)))
      return
    }

    for(let i = 0; i < n; i++) {
      if (!col.has(i) && !left.has(i + row) && !right.has(row - i)) {
        col.add((i)), left.add(i + row), right.add(row - i)
        cur.push(i)
        dfs(res, row + 1, cur)
        cur.pop()
        col.delete(i)
        left.delete(i + row)
        right.delete(row - i)
      }
    }
  }

  dfs(res, 0)
  return res
};

console.log(solveNQueens(4))

// @lc code=end

