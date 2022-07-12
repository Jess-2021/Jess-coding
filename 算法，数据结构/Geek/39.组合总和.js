/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = []
  var dfs = function(cur, canList, idx) {
    if (cur === 0) return result.push(canList)
    if (cur < 0) return
    if (idx === candidates.length) return
    if (cur - candidates[idx] >= 0) {
      dfs(cur - candidates[idx], [...canList, candidates[idx]], idx);
    }
    dfs(cur, canList, idx + 1)
  }

  dfs(target, [], 0)

  return result
};

console.log(combinationSum([2,3,5], 8))
// @lc code=end

