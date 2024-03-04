/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }

  let slow = head;
  let fast = head;
  let node; // 相交点

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      node = slow;
      break;
    }
  }

  if (!node) {
    return null;
  } else {
    slow = head;
    fast = node;

    while (slow.next) {
      if (slow === fast) {
        return slow;
      }

      slow = slow.next;
      fast = fast.next;
    }
  }

  return null;
};

// ===

const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

const r = detectCycle(a);

console.log(r);

export {};
