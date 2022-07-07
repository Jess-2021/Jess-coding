/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 线性结构最后几个节点
var removeNthFromEnd = function(head, n) {
  let slow = head, fast = head
  for (let i = 0; i < n; i++) fast = fast.next
  if (!fast) return head.next // 节点不够时
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next // 节点已经确认存在

  return slow
};
// @lc code=end

