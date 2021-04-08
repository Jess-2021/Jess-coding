/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 1. 循环查找到0，则push到最后
  // 2. splice直接截取掉有0的元素
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[temp] === 0) {
      nums.splice(temp, 1);
      nums[nums.length] = 0;
    } else {
      temp++
    }
  }
};

var moveZeroes1 = function (arr) {
  let next = 0;
  for (let i = 0; i < arr.length;i++) {
    if (arr[next] === 0) {
      arr.splice(next, 1);
      arr[arr.length] = 0;
    } else {
      next++;
    }
  }
  return arr;
}

var moveZeroes2 = (arr) => {
  var temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[temp]) {
      arr.splice(temp, 1);
      arr.push(0);
    } else {
      temp++
    }
  }
  return arr;
}

console.log(moveZeroes2([0,0,0,1,0,3,12]))
// @lc code=end
