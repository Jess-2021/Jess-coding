/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let res = []
  let recursion = function(root) {
    if (!root) return;
    res.push(root.val)
    recursion(root.left)
    recursion(root.right)
  }
  recursion(root)
  return res
};

var preorderTraversal1 = function(root) {
  let res = []
  let stack = [root]
  while(stack.length) { //  || root
    if (!root.val) {
      let val = stack.pop()
      res.push(val)
    }
    root.right && stack.push(root.right)
    root.left && stack.push(root.left)
  }
  return res
}

console.log(preorderTraversal1([1,null,2,3]))
// @lc code=end

