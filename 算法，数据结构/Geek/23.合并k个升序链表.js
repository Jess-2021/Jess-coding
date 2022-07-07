/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */


// n个数组 ➡️ 归并
// 合并链表，递归，迭代

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return merge(lists)
};

var merge = function(list) {
  if (list.length <= 1) return list[0] ?? null
  let left = list.splice(0, Math.floor(list.length / 2))
  return mergeTwoLists(merge(left), merge(list))
}

var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 ?? l2
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
}
// @lc code=end

