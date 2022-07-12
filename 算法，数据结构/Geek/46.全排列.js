/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  var dfs = function(temp, canList) {
    if (!canList.length) return result.push(temp)
    for(let i = 0; i < canList.length; i++) {
      let cur = canList.slice()
      cur.splice(i, 1)
      dfs([...temp, canList[i]], cur)
    }
  }

  dfs([], nums)

  return result
};

console.log(permute([1,2,3]))
// @lc code=end

