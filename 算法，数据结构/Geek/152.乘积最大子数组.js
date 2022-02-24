/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[i] = Math.max(nums[i], nums[i] * dp[i - 1])
var maxProduct = function(nums) {
  let min = max = res = nums[0]
  for(let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max]
    max = Math.max(nums[i], nums[i] * max)
    min = Math.min(nums[i], nums[i] * min)
    res = Math.max(max,res)
  }
  return res
};
// @lc code=end

