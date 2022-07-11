/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 1 && nums[0] === target) return [0,0]
  let left = 0, right = nums.length - 1, res = null
  while(left <= right && res == null) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      res = mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (res == null) return [-1, -1]
  let start = end = res
  while(nums[start] === target || nums[end] === target) {
    if (nums[start] === target) start--
    if (nums[end] === target) end++
  }

  return [start + 1, end - 1]
};

console.log(searchRange([5,7,7,8,8,10], 6))
// @lc code=end

