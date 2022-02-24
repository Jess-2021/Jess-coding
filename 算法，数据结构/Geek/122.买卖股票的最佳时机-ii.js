/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 * 
 * 2
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0
  if (prices.length === 1) return res
  for(let i = 1; i < prices.length; i++) {
    if (prices[i] > price[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }

  return res
};

var maxProfit = function(prices) {
  let res = 0
  if (prices.length <= 1) return res
  for(let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }

  return res
}

// 状态定义：dp[i][k][0] 第i天，还可以交易k次，手中没有股票
//   i - 天数
//   k - 交易次数
//   0 - 不持有
//   1 - 持有

// 最终最大收益：dp[n - 1][k][0]，最后肯定卖出去比持有收益高

// 状态转移方程：
//   - 今天没有持有股票：dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
//   - 今天持有股票：dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
//   - 取前两者的最大值

var maxProfit = function(prices) {
  let dp = new Array(prices.length).fill([0, 0])
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for(let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }

  return dp[prices.length - 1][0]
}

console.log(maxProfit([1,2,3,4,5]))


// @lc code=end

