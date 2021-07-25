/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
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
// var twoSum = function(nums, target) {
//   let arr = []

//   for (let i = 0; i < nums.length-1; i++) {
//     for (let j = i+1; j <= nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         arr = [i, j]
//       }
//     }
//   }
//   return arr;
// };

var twoSum = function (arr, target) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res = [i, j];
      }
    }
  }
  return res
}

var twoSum2 = function (arr, tag) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === tag) {
        res = [i, j];
      }
    }
  }
  return res;
}

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

console.log(twoSum3([3,3], 6))
// @lc code=end
