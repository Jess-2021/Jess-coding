/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 空间复杂度为：O(1) => 合并为一个链表进行操作


var getIntersectionNode = function(headA, headB) {
  let p1 = headA, p2 = headB
  while(p1 || p2) {
    if (p1 === p2) return p1.val
    p1 = p1 ? p1.next : headB
    p2 = p2 ? p2.next : headA
  }

  return null
};
// @lc code=end

