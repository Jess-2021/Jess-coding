/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let a = 0,b = 1
  while(a < nums.length) {
    if (nums[a] === nums[b]) {
      nums.splice(b, 1)
    } else {
      b++
      a++
    }
  }
  return ++a
};

var removeDuplicates = function(nums) {
  let a = 0, b = 1
  while(a < nums.length) {
    if (nums[a] === nums[b]) {
      nums.splice(b, 1)
    } else {
      a++
      b++
    }
  }

  return nums.length
}

var removeDuplicates = function(nums) {
  let i = 0, j = 1
  for(;j < nums.length;) {
    if (nums[j] === nums[i]) {
      nums.splice(j, 1)
    } else {
      i++
      j++
    } 
  }
  return nums.length
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// 限制空间 -> 双指针
// @lc code=end

