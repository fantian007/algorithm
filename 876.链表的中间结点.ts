/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let p1, p2;
  p1 = p2 = head;

  while (p2 && p2.next) {
    p1 = p1.next; // 慢指针
    p2 = p2.next.next; // 快指针
  }

  return p1;
};
// @lc code=end

