/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

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
console.log(twoSum([3,3], 6))
// @lc code=end
