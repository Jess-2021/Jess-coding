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

var inorderTraversal = function(root) {
  let res = []
  let stack = []
  let cur = root
  while(stack.length || cur) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
}

// 先深层遍历，尽头后出栈一个，继续下一个的遍历
var inorderTraversal = function(root) {
  let res = []
  if (!root) return res
  let stack = []
  let node = root
  while(stack.length || node) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop() // 拿到该节点继续找到右节点
      res.push(node.val)
      node = node.right
    }
  }

  return res
}