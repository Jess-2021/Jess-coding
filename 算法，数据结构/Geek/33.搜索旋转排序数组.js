/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((right + left) / 2)
    if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
      left = mid + 1
    } else if (target < nums[0] && target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left === right && nums[right] === target ? right : -1
}
// @lc code=end

