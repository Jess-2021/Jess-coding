/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//   let res = []
//   const recursion = function(left, right, str) {
//     if (left === n && right === n ) {
//       res.push(str)
//       return
//     }
//     if (left < n) recursion(left + 1, right, str + '(')
//     if (right < left) recursion(left, right + 1, str + ')')
//   }
//   recursion(0, 0, '')
  
//   return res
// };

var generateParenthesis = function(n) {
  let list = []
  var recursion = function(left, right, str) {
    if (str.length === 2*n) return list.push(str)

    if (left < n) recursion(left+1, right, str + '(')
    if (right < left) recursion(left, right+1, str + ')')
  }
  recursion(0, 0, '')
  return list
}

console.log(generateParenthesis(3))
// @lc code=end

