/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// 存数字数组 ➡️ number类型 ps: [1,2,3,4] => 1234

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let tar, next, length = nums.length
  for(let i = length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1] && tar == null) {
      tar = i - 1
    }
  }
  if (tar === undefined) return nums.reverse()
  for(let i = length - 1; i > tar; i--) {
    if (nums[tar] < nums[i] && next == null) {
      next = i
    }
  }
  [nums[tar], nums[next]] = [nums[next], nums[tar]]
  reverseArr(tar + 1, nums)
  return nums
};

var reverseArr = function(idx, arr) {
  let end = arr.length - 1
  while(idx < end) {
    [arr[idx], arr[end]] = [arr[end], arr[idx]]
    idx++
    end--
  }
}

console.log(nextPermutation([1,2,3]))
// @lc code=end

