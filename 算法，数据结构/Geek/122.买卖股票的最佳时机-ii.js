/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 * 
 * 1
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
// @lc code=end

