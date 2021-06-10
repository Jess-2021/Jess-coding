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
// var threeSum = function(nums) {
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
var threeSum = function (nums) {
    var res = [];
    var len = nums.length;
    if (len < 3)
        return res;
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < len - 1; i++) {
        if (i > 0 && nums[i - 1] === nums[i])
            continue;
        for (var x = i + 1, y = len - 1; x < y;) {
            var sum = nums[i] + nums[x] + nums[y];
            if (sum === 0) {
                res.push([nums[i], nums[x], nums[y]]);
                while (nums[x] === nums[x - 1])
                    x++;
                while (nums[y] === nums[y - 1])
                    y--;
                x++;
                y--;
            }
            else if (sum > 0)
                y--;
            else if (sum < 0)
                x++;
        }
    }
    return res;
};
console.log(threeSum([-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0]));
// @lc code=end
//# sourceMappingURL=15.三数之和.js.map