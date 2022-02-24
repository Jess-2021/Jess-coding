/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let queue = [], res = 0
  if (!amount) return res
  queue.push(amount)
  while(queue.length) {
    let prev = queue.shift()
    for(let i = 0; i < coins.length; i++) {
      const current = prev - coins[i]
      if (current === 0) {
        return res / coins.length + 1
      } else if (current > 0) {
        queue.push(current)
      }
    }
    res += 1
  }

  return -1
};


// DP: f[n] = Math.min(f[n - k]) + 1 // n-k为遍历coins出来的最小值
var coinChange = function(coins, amount) {
  let max = amount + 1, dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for(let i = 1; i <= amount; i++) {
    for(let j of coins) {
      if (j <= i) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([2], 2))
// @lc code=end

