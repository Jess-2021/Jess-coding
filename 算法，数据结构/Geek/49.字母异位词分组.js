/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
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

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(res)
// @lc code=end

