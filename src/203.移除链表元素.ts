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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null;
  }

  while (head?.val === val) {
    head = head.next;
  }

  let prev = null;
  let cur = head;

  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }

  return head;
}

class ListNode {
  constructor(public val?: number, public next?: ListNode) {}
}

const a = new ListNode(6);
const b = new ListNode(2);
const c = new ListNode(6);
const d = new ListNode(3);
const e = new ListNode(4);
const f = new ListNode(5);
const g = new ListNode(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(JSON.stringify(removeElements(a, 6)));
