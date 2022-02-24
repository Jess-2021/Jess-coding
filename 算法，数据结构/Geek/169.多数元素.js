/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {}
  for(let i = 0;i<nums.length;i++) {
    let item = nums[i]
    map[item] = map[item] + 1 || 1
    if (map[item] > (nums.length >> 1)) return item
  }
};

var majorityElement = function(nums) {
  let map = {}, maxIndex = null
  for(let i = 0; i < nums.length; i++) {
    let item = nums[i]
    map[item] = map[item] ? map[item] + 1 : 1
    maxIndex = map[maxIndex] > map[item] ? maxIndex : item
  }

  return maxIndex
}

console.log(majorityElement([3,3,4]))
// @lc code=end

