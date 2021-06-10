/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
const removeDuplicates = (list: number[]): number => {
  if (list.length === 1) return list.length;
  let a = 0, b = 1;
  while(a < list.length) {
    if (list[a] === list[b]) {
      list.splice(b, 1)
    } else {
      b++
      a++
    }
  }

  return list.length;
};
// @lc code=end
