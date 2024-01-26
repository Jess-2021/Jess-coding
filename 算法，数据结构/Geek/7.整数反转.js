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


var reverse = function(x) {
    // 反转整数，取最后一位
    // 中止条件 !0
    // 当位数相等时，提前退出，判断末尾
    // 2 ** 31 - 1 = 2147483647

    let res = 0
    while(x != 0) {
        let tmp = x % 10
        if (res > 214748364 || res > 2147483647 - tmp) return 0
        if (res < -214748364 || res < -2147483648 + tmp) return 0
        res = res * 10 + tmp
        x = ~~(x / 10)
    }

    return res
}

console.log(reverse(123))
// @lc code=end

