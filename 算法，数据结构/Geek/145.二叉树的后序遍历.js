/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let res = []
  let recursion = function(root) {
    if(!root) return
    recursion(root.left)
    recursion(root.right)
    res.push(root.val)
  }
  recursion(root)
  return res
};

var postorderTraversal = function(root) {
  return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : []
}

var postorderTraversal = function(root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while(stack.length) {
    let current = stack.pop()
    res.unshift(current.val)
    current.left && stack.push(current.left)
    current.right && stack.push(current.right)
  }

  return res
}

var obj = {
  val: 1,
  left: {
    val: 3,
    right: {
      val: 2
    }
  }
}

console.log(postorderTraversal(obj))

// @lc code=end

