/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // 将后面的反转，返回链表的头节点
  const last = reverseList(head.next);
  // 下一个节点的 next 指向当前节点（反转）
  head.next.next = head;
  // 当前节点的 next 设置为空（假设 head 为3，理论上下一个节点应该是2，这里先设置为 null，递归回溯到 2 的时候，会将 3.next =2，主要是为了防止最后一个节点 1.next 再次等于 2）
  head.next = null;

  return last;
};
// @lc code=end

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

const r = reverseList(a);

console.log(JSON.stringify(r));

export { };
