/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((acc, i) => {
    acc ^= i
    return acc
  })
};

console.log(singleNumber([2,2,1,4,1]))
// @lc code=end

