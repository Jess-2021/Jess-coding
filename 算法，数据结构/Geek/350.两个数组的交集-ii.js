/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let m = new Map(), res = []
  for(let i = 0; i < nums1.length; i++) {
    let c = m.get(nums1[i])
    m.set(nums1[i], c ? c + 1 : 1)
  }
  for(let i = 0; i < nums2.length; i++) {
    let c = m.get(nums2[i])
    if (c) {
      res.push(nums2[i])
      m.set(nums2[i], c - 1)
    }
  }

  return res
};

console.log(intersect([1,2,2,1], [2,2]))
// @lc code=end

