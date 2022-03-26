/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = new Array(9).fill(0).map(i => new Array(9).fill(0))
  let col = new Array(9).fill(0).map(i => new Array(9).fill(0))
  let subPiece = new Array(3).fill(0).map((i => new Array(3).fill(0).map(i => new Array(9).fill(0))))
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      let char = board[i][j]
      if (char !== '.') {
        const index = char - 1
        row[i][index]++
        col[j][index]++
        subPiece[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        if (row[i][index] > 1 || col[i][index] > 1 || subPiece[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false
        }
      }
    }
  }
  return true
};

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))
// @lc code=end

