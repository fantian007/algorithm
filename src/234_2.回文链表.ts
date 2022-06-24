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

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let left = head;

  /**
   * 先压栈，再出栈，节点的遍历顺序就是倒着的
   * right 从后往前遍历
   * left 从前往后遍历
   * 如果全称对称相等，那么就是回文链表
   */
  const traverse = (right: ListNode) => {
    if (right === null) {
      return true;
    }

    let res = traverse(right.next);
    // 相当于链表的后序遍历
    res = res && right.val === left.val;

    left = left.next;

    return res;
  }

  return traverse(head);
};
// @lc code=end

