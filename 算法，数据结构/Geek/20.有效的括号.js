/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  const stack = []
  for(let i =0;i<str.length;i++) {
    if (i === 0) {
      stack.push(str[i])
      continue
    }
    if (str[i] === ']') {
      if (stack[stack.length -1] === '[') {
        stack.pop()
        continue
      }
    }
    if (str[i] === '}') {
      if (stack[stack.length -1] === '{') {
        stack.pop()
        continue
      }
    }
    if (str[i] === ')') {
      if (stack[stack.length -1] === '(') {
        stack.pop()
        continue
      }
    }
    stack.push(str[i])
  }
  return stack.length === 0
};
// @lc code=end

console.log(isValid("(])"))