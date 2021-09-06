/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let a = 0,b = 1
  while(a < nums.length) {
    if (nums[a] === nums[b]) {
      nums.splice(b, 1)
    } else {
      b++
      a++
    }
  }
  return ++a
};

// 限制空间 -> 双指针
// @lc code=end

