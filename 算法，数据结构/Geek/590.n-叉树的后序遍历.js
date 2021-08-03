/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  let res = []

  function recursion(root) {
    let parent = root
    let cur = root
    while (cur.val) {
      if (cur.children) {
        cur = cur.children
      } else {
        res.push(cur.val)
        cur.val = null
      }
    }
  }
  recursion(root)

  return res
};
// @lc code=end

