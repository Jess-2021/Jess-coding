/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;
  let a = 1, b = 2, c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};
// 计算机操作
// if else, for, recursion
// 找最近 重复子问题
// @lc code=end


var climbStairs = function(n) {
  if (n < 3) return n
  let a = 3, b = 2, c = 1
  for(let i = 3; i <= n; i++) {
    a = b + c
    c = b
    b = a
  }
  return a
}

// c = b
// b = a
// 两个b对角线交换
console.log(climbStairs(45))