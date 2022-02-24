/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  return nums.concat([...(new Array(nums.length + 1)).keys()]).reduce((acc, item) => {
    acc ^= item
    return acc
  }, 0)
};

var missingNumber1 = function(nums) {
  return nums.reduce((acc, item, index) => acc ^= item ^ index, nums.length)
}

var missingNumber = function(nums) {
  return nums.concat(new Array(nums.length + 1).fill(0).map((_, idx) => idx)).reduce((acc, item) => {
    acc ^= item
    return acc
  }, 0)
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
// @lc code=end

