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
var obj = {
  val: 1,
  left: {
    val: 3,
    right: {
      val: 2
    }
  }
}
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

var inorderTraversal = function(root) {
  return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
}

// @lc code=end


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

var inorderTraversal = function(root) {
  let res = []
  if (!root) return res
  let stack = []
  let current = root
  while(stack.length || current) {
    if (current) {
      stack.push(current)
      current = current.left;
    } else {
      current = stack.pop()
      res.push(current.val)
      current = current.right
    }
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
console.log(inorderTraversal(obj))