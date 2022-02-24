/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 * 
 * 3  
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

var preorderTraversal = function(root) {
  return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : []
}

// 迭代法
var preorderTraversal = function(root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while(stack.length) { //  || root
    let node = stack.pop()
    res.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return res
}

var preorderTraversal = function(root) {
  if(!root) return []
  let stack = [root], res = []
  while(stack.length) {
    let current = stack.pop()
    res.push(current.val)
    current.right && stack.push(current.right)
    current.left && stack.push(current.left);
  }

  return res
}

var preorderTraversal = function(root) {
  let res = []
  if (!root) return res
  const recursion = function(node) {
    if (!node) return
    res.push(node.val)
    node.left && recursion(node.left)
    node.right && recursion(node.right)
  }

  recursion(root)
  return res
}

var preorderTraversal = function(root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while(stack.length) {
    let node = stack.pop()
    res.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
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

console.log(preorderTraversal(obj))
// @lc code=end

