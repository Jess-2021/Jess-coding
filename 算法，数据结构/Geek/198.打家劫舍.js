/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0
  let length = nums.length
  let f = new Array(length).fill(0).map(() => new Array(2).fill(0))
  f[0][0] = 0
  f[0][1] = nums[0]

  for(let i = 1; i < length; i++) {
    f[i][0] = Math.max(f[i - 1][1], f[i - 1][0])
    f[i][1] = f[i - 1][0] + nums[i]
  }

  return Math.max(f[length - 1][0], f[length - 1][1])
};

var rob = function(nums) {
  if (!nums.length) return 0
  let leng = nums.length
  let n = new Array(leng + 1).fill(0)
  n[0] = 0
  n[1] = nums[0]
  for(let i = 2; i <= leng; i++) {
    n[i] = Math.max(n[i - 1], n[i - 2] + nums[i - 1])
  }

  return n[leng]
}

// 子问题
// 状态定义
// DP

// 解法1：
  // 状态定义：a[i] 0...i能偷到的最大值
  // DP:
    a[i][0] = Math.max(a[i - 1][1], a[i - 1][0])
    a[i][1] = a[i - 1][0] + nums[i]

// 解法2
  // 状态定义：a[i]必偷时的最大值
  // DP：a[i] = Max(a[i - 1], a[i - 2] + nums[i - 1])
// @lc code=end

