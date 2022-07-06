/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 最小集去看
// 【*，1，*】
// 【2，*，2】
// val === val && .left === .right
var isSymmetric = function(root) {
  var recursion = function(left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && recursion(left.left, right.right) && recursion(left.right, right.left)
  }
  return recursion(root, root)
};

isSymmetric()
// @lc code=end

