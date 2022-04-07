/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let f = new Array(nums.length).fill(1);
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        f[i] = Math.max(f[i], f[j] + 1) // 2 5 3 的情况
      }
    }
  }
  return Math.max(...f)
};

var lengthOfLIS = function(nums) {
  let f = new Array(nums.length).fill(1)
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
  }

  return Math.max(...f)
}

var lengthOfLIS = function(nums) {
  const top = []
  let piles = 0
  for(let i = 0; i < nums.length; i++) {
    let poker = nums[i]
    let left = 0, right = piles
    while(left < right) {
      let mid = Math.floor((right - left) / 2) + left
      if (top[mid] > poker) {
        right = mid
      } else if (top[mid] < poker) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    if (left === piles) piles++
    top[left] = poker
  }

  return piles
}
// 定义：f[i] 最大的递增子序列长度, f[j]为比f[i]小的最长子序列长度 f[j] < f[i]
// 方程: f[i] = Max(f[i], f[j] + 1)

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// @lc code=end

