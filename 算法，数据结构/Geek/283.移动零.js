/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 1. 循环查找到0，则push到最后
  // 2. splice直接截取掉有0的元素
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[temp] === 0) {
      nums.splice(temp, 1);
      nums[nums.length] = 0;
      console.log(nums)
    } else {
      temp++
    }
  }
};
// @lc code=end
