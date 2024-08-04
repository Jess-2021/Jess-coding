/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 
 * 3
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   // 1. 暴力法，直接将所有的情况遍历出来，并比较
//   let max = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (var j = i + 1; j < height.length; j++) {
//       let min = Math.min(height[i], height[j]);
//       max = Math.max(min * (j - i), max);
//     }
//   }
//   return max;
// };
// 双指针代表的是 可以作为容器边界的所有位置的范围。
var maxArea = function(height) {
  // 1. 两边夹逼，两边往中间夹击，操作时取的时比较短的边往中间夹
  let max = Math.min(height[0], height[height.length - 1]) * (height.length - 1);
  for (let i = 0, j = height.length - 1; i < j;) {
    height[i] > height[j] ? j-- : i++;
    max = Math.max(max, Math.min(height[i], height[j]) * (j-i))
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end

var maxArea = function(height) {
    let max = 0, leng = height.length
    for (let x = 0, y = leng - 1; x < y;) {
        max = Math.max(max, Math.min(height[x], height[y]) * (y - x))
        height[x] < height[y] ? x++ : y--
    }

    return max
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
