/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 * 
 * 3
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

var search = function(nums, target) {
  let left =  1, right = nums.length -1
  while(left < right) {
    let mid = Math.floor((left + right) / 2)
    let item = nums[mid]

    // 当只有两个元素的时候，有可能0 和 mid 都是指向同一个元素
    if (nums[0] <= nums[mid] && (target < nums[0] || target > item)) {
      left = mid + 1
    } else if (target < nums[0] && target > item) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return right === left && nums[left] === target ? left : -1
}

console.log(search([3,4,5,1,2], 2))

// 二分查找
// 单调
// index
// 边界
// @lc code=end

