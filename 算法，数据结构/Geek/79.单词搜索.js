/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let h = board.length, w = board[0].length
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let visited = new Array(h).fill(0).map(i => new Array(w).fill(false))
  var dfs = function(idx, x, y) {
    let code = word.charAt(idx)
    if (code !== board[x][y]) {
      return false
    } else if (idx === word.length - 1) {
      return true
    }
    visited[x][y] = true
    let result = false
    for(let [i, j] of directions) {
      let nx = i + x, ny = j + y
      if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
        if (!visited[nx][ny]) {
          const falt = dfs(idx + 1, nx, ny)
          if (falt) {
            result = true
            break
          }
        }
      }
    }
    visited[x][y] = false
    return result
  }

  for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
      let res = dfs(0, i, j)
      if (res) return true
    }
  }

  return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'))

// @lc code=end

