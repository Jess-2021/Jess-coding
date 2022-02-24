/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// 定义：
//   i: 天数
//   0 | 1 ： 是否持有
// 转移方程：
// 今天不持有的情况：昨天也不持有，今天不卖；昨天持有，卖出
//   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// 今天持有：昨天持有，不卖；昨天不持有，今天买入；
//   dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length
  let dp = new Array(n).fill([0, 0])
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for(let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }

  return dp[n - 1][0]
};
// @lc code=end

