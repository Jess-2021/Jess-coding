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

// 递归
const postorder = function(root) {
  let res = []
  if (!root) return res
  const recursion = function(node) {
    if (node.children) {
      for(let i = 0; i < node.children.length; i++) {
        recursion(node.children[i])
      }
    }
    res.push(node.val)
  }
  recursion(root)
  return res
}

// 迭代
const postorder = function(root) {
  let res = [], stack = [root]
  while(stack.length) {
    let node = stack.pop()
    if (!node) continue // 如果为null的情况
    res.push(node.val)
    stack.push(...node.children)
  }
  return res.reverse()
}
// @lc code=end

