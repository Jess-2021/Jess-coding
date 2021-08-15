/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 不能有相同元素
// 保存时，保存node
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let pre = null
  let recursion = function(node) {
    if (!node) return true
    let left = recursion(node.left)
    if (pre !== null && node.val <= pre.val) return false
    pre = node
    let right = recursion(node.right)
    return left && right
  }
  return recursion(root)
};
// @lc code=end

