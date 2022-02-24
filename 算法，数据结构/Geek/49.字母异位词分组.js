/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 * 
 * 2
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 1) {
    return [[strs[0]]]
  }
  let sortStr = strs.map(item => [...item].sort().join(''))
  let i, obj = {};
  for(i = 0; i < sortStr.length; i++) {
    obj.hasOwnProperty(sortStr[i])
      ? obj[sortStr[i]].push(strs[i])
      : obj[sortStr[i]] = [strs[i]]
  }
  return Object.values(obj)
};

var groupAnagrams = function(strs) {
  if (!strs.length) {
    return [strs]
  }
  let tempStrs = strs.map(str => str.split('').sort())
  let i, obj = {}
  for (i = 0; i < tempStrs.length; i++) {
    obj.hasOwnProperty(tempStrs[i]) ? obj[tempStrs[i]].push(strs[i]) : obj[tempStrs[i]] = [strs[i]]
  }

  return Object.values(obj)
}

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(res)
// @lc code=end

