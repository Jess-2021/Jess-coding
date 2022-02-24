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

var subsets = function(nums) {
  let res = []
  if (!nums.length) return res
  function dfs(temp, idx) {
    res.push(temp)
    for(let i = idx; i < nums.length; i++) {
      dfs(temp.concat(nums[i]), i + 1)
    }
  }
  dfs([], 0)

  return res
}

// 回溯问题

// 1. 画出递归树，找到状态变量（*回溯函数的参数）
// 2. 确立结束条件
// 3. 选择列表，也可能为一部分结果（一般为回溯函数参数）
// 4. 是否需要剪掉重复的路径，剪枝
// 5. 做出选择，递归调用，进入下一层
// 6. 撤销选择

console.log(subsets([1,2,3]))
// @lc code=end

