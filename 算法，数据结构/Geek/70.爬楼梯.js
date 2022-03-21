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
// @lc code=end

var climbStairs = function(n) {
  let f = new Array(n + 1).fill(0)
  for(let i = 1; i < f.length; i++) {
    if (i <= 2) {
      f[i] = i
    } else {
      f[i] = f[i - 1] + f[i - 2]
    }
  }

  return f[n]
}

var climbStairs = function(n, map) {
  if (n <= 2) return n
  if (!map[n]) {
    map[n] = climbStairs(n - 1, map) + climbStairs(n - 2, map)
  }
  return map[n]
}

// var climbStairs = function(n) {
//   if (n <= 2) return n
//   let a = 1, b = 2, c
//   for(let i = 3; i <= n; i++) {
//     c = a + b
//     a = b
//     b = c
//   }

//   return c
// }

// c = b
// b = a
// 两个b对角线交换
// 移位时，首先处理应该是之后没有用到的数据，也就是即将被移除操作区的第一个的元素 
// -> -> ->
console.log(climbStairs(15, {}))