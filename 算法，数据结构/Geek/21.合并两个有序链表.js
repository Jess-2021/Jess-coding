/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
};

var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)

  return l2
}

var mergeTwoLists = function(l1, l2) {
  let res = new ListNode(), temp = res
  while(l1 && l2) {
    if (l1.val <= l2.val) {
      temp.next = l1 // 只需把指针指向下一个
      l1 = l1.next
    } else {
      temp.next = l2.val
      l2 = l2.next
    }
    temp = temp.next
  }
  temp.next = l1 ?? l2

  return res.next
}

var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return l1
  if (!l1 || !l2) return l1 ?? l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l2.next, l1)
  return l2
}
// @lc code=end

