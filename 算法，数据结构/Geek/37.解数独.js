/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
  var solve = function(board) {
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        let item = board[i][j]
        if (item === '.') {
          for(let k = 1; k <= 9; k++) {
            if (isVaild(board, i, j, k)) {
              board[i][j] = k.toString()

              if (solve(board)) {
                return true
              } else {
                board[i][j] = '.'
              }
            }
          }
          return false
        }
      }
    }

    return true
  }
  solve(board)
};


var isVaild = function(board, row, col, c) {
  for(let i = 0; i < 9; i++) {
    if (board[i][col] !== '.' && board[i][col] == c) return false
    if (board[row][i] !== '.' && board[row][i] == c) return false
    if (board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] !== '.' && board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] == c
    ) return false
  }
  return true
}

// @lc code=end

