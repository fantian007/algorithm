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

  const arr = [];

  let cur = head;

  while (cur !== null) {
    arr.push(cur.val);

    cur = cur.next;
  }

  while (arr.length) {
    if (arr.length === 1) {
      return true;
    }

    const left = arr.shift();
    const right = arr.pop();

    if (left !== right) {
      return false;
    }
  }

  return true;
};
// @lc code=end

