/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 * 
 * 3
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

// 控制每一层选与不选
var subsets = function(nums) {
  let res = []
  if (!nums.length) return res
  recursion(res, 0, [])

  return res
  function recursion(list, index, handleList) {
    if (index === nums.length) {
      list.push([...handleList])
      return
    }
    recursion(list, index + 1, handleList) // 不选
    handleList.push(nums[index])
    recursion(list, index +1, handleList)
    handleList.pop()
  }
}

var subsets = function(nums) {
  let res = []
  if (!nums.length) return res
  dfs([], 0)

  function dfs(list, index) {
    res.push(list)
    for(let i = index; i < nums.length; i++) {
      dfs(list.concat(nums[i]), i + 1)
    }
  }

  return res
}


console.log(subsets([1,2,3]))
// @lc code=end

