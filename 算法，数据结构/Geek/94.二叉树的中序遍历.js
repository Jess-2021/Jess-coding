/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


//  - 遍历：

//  1. 前序。根左右
//  2. 中序。左根右边。
//  3. 后序。左右根。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // 左中右
  let res = []
  let recursion = function(root) {
    if (!root) return
    recursion(root.left)
    res.push(root.val)
    recursion(root.right)
  }
  recursion(root)
  return res
};
// @lc code=end

