/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let p1 = undefined;
  let p2 = head;
  let i = 0;

  while (p2) {
    if (i === n) {
      p1 = head;
    } else {
      if (p1) {
        p1 = p1.next;
      }
    }

    p2 = p2.next;
    i++;
  }

  if (!p1) {
    return head.next;
  }

  p1.next = p1.next.next;

  return head;
};
// @lc code=end

