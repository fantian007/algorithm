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

function hasCycle(head: ListNode | null): boolean {
  let p1, p2;
  p1 = p2 = head;

  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    // 快慢指针最终相遇，则说明有环
    if (p1 === p2) {
      return true;
    }
  }

  return false;
};
// @lc code=end

