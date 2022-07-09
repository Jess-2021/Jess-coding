/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = []
  if (!root) return res
  let queue = [root]

  while(queue.length) {
    let qLength = queue.length
    res.push([])
    for(let i = 1;i <= qLength; ++i) { // 需要在循环后，改变循环条件
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res
};

var levelOrder = function(root) {
  let queue = [root], res = []
  if (!root) return res

  while(queue.length) {
    let leng = queue.length
    res.push([])
    for(let i = 1; i <= leng; ++i) {
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res
}

var levelOrder = function(root) {
  let queue = [root], res = []
  if (!root) return res
  while(queue.length) {
    let current = queue.shift()
    res.push([])
    res[leng - 1].push(current.val)
    current.left && res.push(current.left)
    current.right && res.push(current.right)
  }

  return res
}

var levelOrder = function(root) {
  let queue = [root], res = []
  if (!root) return res
  while(queue.length) {
    let leng = queue.length
    res.push([])
    for(let i = 1; i <= leng; i++) {
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  return res
}

var levelOrder = function(root) {
  let res = [], list = [root]
  if (!root) return []
  while(list.length) {
    const tmp = []
    res.push([])
    list.forEach(i => {
      res[res.length - 1].push(i.val)
      i.left && tmp.push(i.left)
      i.right && tmp.push(i.right)
    })
    queue = tmp
  }

  return res
}
  // @lc code=end

