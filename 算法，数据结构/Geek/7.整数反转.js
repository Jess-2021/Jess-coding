/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  while(x != 0) {
    let temp = x % 10
    // 大于2 ** 31时需要进行判定 可能超过阈值
    if (res > 214748364 || (res === 214748364 && temp > 7)) return 0
    if (res < -214748364 || (res === -214748364 && temp < -8)) return 0

    res = res * 10 + temp
    x = ~~(x / 10)
  }

  return res
};

console.log(reverse(123))


// @lc code=end

