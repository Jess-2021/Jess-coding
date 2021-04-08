/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
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
var maxArea = function(height) {
  // 1. 两边夹逼，两边往中间夹击，操作时取的时比较短的边往中间夹
  let max = Math.min(height[0], height[height.length-1]) * (height.length - 1);
  for (let i = 0, j = height.length - 1; i < j;) {
    height[i] > height[j] ? j-- : i++;
    max = Math.max(max, Math.min(height[i], height[j]) * (j-i))
  }
  return max;
};

// var maxArea = function (arr) {
//   // 两边夹逼
//   let sum = 0;
//   // 1. 两边往中间夹逼
//   for (let i = 0, j = arr.length - 1; i < j;) {
//     // 2. 两边所得得大小与之前的进行比较；
//     let temp = Math.min(arr[i], arr[j]) * (j - i);
//     sum = sum > temp ? sum : temp;
//     // 3. 比较两边的大小，小的往中间夹
//     arr[i] > arr[j] ? j-- : i++;
//   }
//   return sum
// }

var maxArea1 = (arr) => {
  let sum = 0;
  for (let x = 0, y = arr.length - 1; x < y;) {
    let res = Math.min(arr[x], arr[y]) * (y - x);
    sum = Math.max(res, sum);
    arr[x] > arr[y] ? y-- : x++;
  }
  return sum;
}


console.log(maxArea1([1,8,6,2,5,4,8,3,7]))
// @lc code=end

