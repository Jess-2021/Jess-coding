/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums:number[]):number[][] {
//   let res = [];
//   if (nums.length < 3 || nums === null) return res;
//   let arr = nums.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (nums[i] > 0) break;
//     if (i > 0 && nums[i] == nums[i - 1]) continue;// 去重
//     for (let x = i + 1, y = arr.length - 1; x < y;) {
//       let sum = arr[i] + arr[x] + arr[y];
//       if (sum === 0) {
//         res.push([nums[i], nums[x], nums[y]]);
//         // 当他们满足条件时，也要进行夹逼，但需要避开同样的值
//         while (x<y && arr[x] === arr[x + 1]) x++;
//         while (x<y && arr[y] === arr[y-1]) y--;
//         x++;
//         y--;
//       }
//       else if (sum < 0) x++;
//       else if (sum > 0) y--;
//     }
//   }
//   return res;
// };

var threeSum = (nums: number[]):number[][] => {
  let res = [];
  let len = nums.length;
  if (nums.length < 3 || nums === null) return res;
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i - 1] === arr[i]) continue;
    for (let x = i + 1, y = len - 1; x < y;) {
      let sum = arr[i] + arr[x] + arr[y];
      if (sum === 0) {
        res.push([arr[i], arr[x], arr[y]]);
        while (x<y && arr[x] === arr[x+1]) x++;
        while (x<y && arr[y] === arr[y-1]) y--;
        x++; y--;
      }
      else if (sum < 0) x++;
      else if (sum > 0) y--;
    }
  }
  return res;
}


// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]))
// @lc code=end

