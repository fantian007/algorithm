/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

// 反转链表
const reverse = (head: ListNode) => {
  let pre = null;
  let cur = head;
  let nxt = head;

  while (cur !== null) {
    nxt = cur.next;
    cur.next = pre;
    // 移动指针
    pre = cur;
    cur = nxt;
  }

  return pre;
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  /**
   * 1. 快慢指针找中点，用于反转后半部分链表
   */
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 节点个数为奇数，slow 移动到下一个节点
  if (fast !== null) {
    slow = slow.next;
  }

  let left = head;
  // 反转后半部分链表
  let right = reverse(slow);

  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
};
// @lc code=end

