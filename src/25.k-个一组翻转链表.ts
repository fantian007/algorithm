/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null;
  }

  // 反转区间
  const reverse = (a: ListNode, b: ListNode) => {
    let pre = null;
    let cur = a;
    let nxt = a;

    while (cur !== b) {
      nxt = cur.next;
      cur.next = pre;
      // 指针前进
      pre = cur;
      cur = nxt;
    }

    return pre;
  }

  // 区间起始节点
  let a = head;
  // 区间结束节点
  let b = head;

  for(let i = 0; i < k; i++) {
    if (b === null) {
      return head;
    } else {
      b = b.next;
    }
  };

  // 区间 [a, b)
  const newHead = reverse(a, b);

  a.next = reverseKGroup(b, k);

  return newHead;
};
// @lc code=end

