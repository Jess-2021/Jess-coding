/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  try {
    JSON.stringify(head)
  } catch {
    return true
  }
  return false
};

var hasCycle = function(head) {
  if (!head || !head.next) return false
  let arr = []
  while(head) {
    if (arr.includes(head)) {
      return true
    } else {
      arr.push(head)
      head = head.next
    }
  }
  return false
}

var hasCycle = function(head) {
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while(slow) {
    if (slow === fast) return true
    slow = slow?.next || null
    fast = fast?.next?.next || null
  }
  return false
}
// @lc code=end

