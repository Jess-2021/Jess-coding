/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 
 * 2
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

var isValid = function(str) {
  let stack = []
  for(let i = 0; i < str.length; i++) {
    let c = str[i]
    switch(c) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) {
          return false
        }
    }
  }

  return !stack.length
}
// @lc code=end

console.log(isValid("([{])"))