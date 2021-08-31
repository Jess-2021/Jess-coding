/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   let res = []
//   if (!nums) return res
//   recursion(res, nums, [], 0)
//   return res
// };

// function recursion(ans, nums, handleArr, index) {
//   if (index === nums.length) {
//     ans.push([...handleArr])
//     return
//   }
//   recursion(ans, nums, handleArr, index + 1) // 不选
//   handleArr.push(nums[index])
//   recursion(ans, nums, handleArr, index + 1) // 选
//   handleArr.pop()
// }

var subsets = function(nums) {
  let result = []
  dfs([], 0)
  function dfs(item, index) {
    result.push(item)
    for(let i = index; i < nums.length; i++) {
      dfs(item.concat(nums[i]), i + 1)
    }
  }
  return result
}

console.log(subsets([1,2,3]))
// @lc code=end

