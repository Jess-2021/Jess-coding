/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 var addTwoNumbers = function(l1, l2) {
  let res = null, carry = 0, temp = null // 有一个head，一个tempList
  while(l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry // 为null时
    if (!res) {
      res = temp = new ListNode(sum % 10)
    } else {
        temp.next = new ListNode(sum % 10)
        temp = temp.next // 指向下一个节点
    }
    carry = Number(sum >= 10)
    l1 = l1?.next
    l2 = l2?.next
  }
  if (carry) {
    temp.next = new ListNode(carry)
  }
  return res
};

var addTwoNumbers = function(l1, l2) {
    // 逐一相加
    // 进位处理，1变量
    // 没有补0处理
    // 输出数组
    let res = null, carry = 0, temp = null

    while(l1 || l2) {
        let sum = (l1.val ?? 0) + (l2.val ?? 0) + carry
        if (!res) {
            res = temp = new ListNode(sum % 10)
        } else {
            temp.next = new ListNode(sum % 10)
            temp = temp.next
        }
        l1 = l1?.next
        l2 = l2?.next
    }

    if (carry) {
        temp.next = new ListNode(carry)
    }

    return res
}

var addTwoNumbers = function(l1, l2) {
    let res = null, carry = 0, tmp = null
    while(l1 || l2) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0)
        carry = sum >= 10 ? 1 : 0
        if (!res) {
            res = tmp = new ListNode(sum % 10)
        } else {
            tmp.next = new ListNode(sum % 10)
            tmp = tmp.next
        }

        l1 = l1?.next
        l2 = l2?.next
    }

    if (carry) {
        tmp.next = new ListNode(carry)
    }

    return res
}

// @lc code=end

