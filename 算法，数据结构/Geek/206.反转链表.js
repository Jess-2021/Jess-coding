/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 
 * 2
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head, prev = null
  while(current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
};

var reverseList = function(head) {
  let prev = null, current = head
  while(current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}


// 类似于数的交换爬楼梯

// @lc code=end

