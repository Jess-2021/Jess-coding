/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let res = [0]
  for(let i = 1; i <= n; i++) {
    if (i & 1) {
      res[i] = res[i - 1] + 1
    } else {
      res[i] = res[i >> 1]
    }
  }
  return res
};

n: 第n位二进制中1的个数

奇数：f[n] = f[n - 1] + 1
偶数：f[n] = f[n >> 1]
// @lc code=end

