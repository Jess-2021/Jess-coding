/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 * 
 * 2
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const res = []
  if (!digits.length) return res
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];

  // str 结果
  // dig 剩余
  // index digits的index
  var recursion = function(str, index) {
    if (index === digits.length) return res.push(str)
    let item = map[digits[index]]
    for(let i = 0; i < item.length; i++) {
      recursion(str + item[i], index + 1)
    }
  }
  recursion('', 0)
  return res
};

var letterCombinations = function(digits) {
  const res = []
  if (!digits.length) return res
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];

  function recursion(str, index) {
    if (index === digits.length) return res.push(str)
    let item = map[digits[index]]

    for(let i = 0; i < item.length; i++) {
      recursion(str + item[i], index + 1)
    }
  }
  recursion('', 0)

  return res
}

console.log(letterCombinations('23'))
// @lc code=end

