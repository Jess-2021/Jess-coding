/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
  var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => b-a)[k]
  };
// @lc code=end

