/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// // 暴力法
// function hasCycle(head: ListNode | null): boolean {
//   if (!head || !head.next) return false;
//   let arr = [];
//   while (head) {
//     if (arr.includes(head)) {
//       return true;
//     }
//     arr.push(head);
//     head = head.next
//   }
//   return false;
// };

// let linkList = new ListNode(1);
// console.log(hasCycle(linkList))
// @lc code=end

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next;
  while (slow) {
    if (slow === fast) return true
    slow = slow?.next || null;
    fast = fast?.next?.next || null;
  }
  return false
}
