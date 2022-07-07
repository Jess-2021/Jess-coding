/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */


// 双数组考虑 [0,0][0,0] [][] [0][]
// 判断是否为number typeof
// 判断是否为浮点数：Number.isInteger、 ~~n === n、 +n === n
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
Number.isInteger
var findMedianSortedArrays = function(nums1, nums2) {
  let nums = (nums1.length + nums2.length) / 2, arr = []
  if (nums === 0.5) {
    return (nums1[0] || nums2[0]) ?? 0
  }
  if (!nums1.length && !nums2.length) return 0
  let i = 0, j = 0
  while(i < nums1.length || j < nums2.length) {
    if (typeof nums1[i] !== 'number' || typeof nums2[j] !== 'number') {
      arr.push(nums1[i] || nums2[j])
      nums1[i] ? i++ : j++
    } else {
      if (nums1[i] <= nums2[j]) {
        arr.push(nums1[i])
        i++
      } else {
        arr.push(nums2[j])
        j++
      }
    }
    if (~~nums === nums && arr.length === nums + 1) {
      return ((arr.pop() + arr.pop()) / 2).toFixed(5)
    } else if (~~nums !== nums && arr.length === Math.round(nums)) {
      return arr.pop()
    }
  }
};

console.log(findMedianSortedArrays([0], []))
// @lc code=end

