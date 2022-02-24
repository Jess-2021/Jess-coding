/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// dp: dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
var maxSubArray = function(nums) {
  let dp = nums
  for(let i = 0; i < dp.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }

  return dp[nums.length - 1]
};
// @lc code=end

