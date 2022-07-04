/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 3
 */

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum3 = function (arr, target) {
  let map = new Map()
  for(let i = 0; i<arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [i, map.get(target - arr[i])]
    } else {
      map.set(arr[i], i)
    }
  }
}

function twoSum(arr, target) {
  let res = []
  let map = new Map()
  for(let i = 0; i < arr.length; i++) {
    let current = map.get(target - arr[i])
    if (current != null) {
      return [current, i]
    } else {
      map.set(arr[i], i)
    }
  }

  return res
}

function twoSum(arr, target) {
  let res = []
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (target - arr[i] === arr[j]) {
        return [i, j]
      }
    }
  }
  return res
}
// Map方法的操作：
// new Map([[arr[0], 0]])

console.log(twoSum([0,0, 3,3], 6))
// @lc code=end
