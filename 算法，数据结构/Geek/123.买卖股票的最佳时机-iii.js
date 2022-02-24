/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// 定义：
// i: 天数
// k: 买入次数
// 0 | 1: 是否持有
// 转移方程：
  // dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
  // dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])



// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length
  let dp = new Array(n).fill(new Array(3).fill([0, 0]))
  dp[0][2][0] = 0
  dp[0][2][1] = -prices[0]
  dp[0][1][1] = -prices[0]
  dp[0][1][0] = 0

  for (let i = 1; i < n; i++) {
    for (let k = 2; k >= 1; k--) {
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }

  return dp[n - 1][2][0]
};

var maxProfit = function(prices) {
  let n = prices.length
  let sell1 = 0, sell2 = 0, buy1 = -prices[0], buy2 = -prices[0]

  for (let i = 1; i < n; i++) {
    sell2 = Math.max(sell2, buy2 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])

    sell1 = Math.max(sell1, buy1 + prices[i])
    buy1 = Math.max(buy1, -prices[i])
  }

  return sell2
};

// let maxProfit = function (prices) {
//   let buy_1 = -prices[0], sell_1 = 0
//   let buy_2 = -prices[0], sell_2 = 0
//   let n = prices.length
//   for (let i = 1; i < n; i++) {
//       sell_2 = Math.max(sell_2, buy_2 + prices[i])
//       buy_2 = Math.max(buy_2, sell_1 - prices[i])
//       sell_1 = Math.max(sell_1, buy_1 + prices[i])
//       buy_1 = Math.max(buy_1, -prices[i])
//   }
//   return sell_2
// }

console.log(maxProfit([3,3,5,0,0,3,1,4]))
// @lc code=end

