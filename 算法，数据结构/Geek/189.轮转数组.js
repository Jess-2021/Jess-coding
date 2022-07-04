/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for(let i = 0; i < k; i++) {
    let temp = nums.pop()
    nums.unshift(temp)
  }
  return nums
}

// 多次反转
// 先反转全部数组，在反转前k个，最后在反转剩余的
var rotate = function(nums, k) {
  var reverse = function(start, end) {
    while(start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
  let temp = k % nums.length
  reverse(0, nums.length - 1)
  reverse(0, temp - 1)
  reverse(temp, nums.length - 1)
}

console.log(rotate([1,2,3,4,5,6,7], 3))
// @lc code=end

