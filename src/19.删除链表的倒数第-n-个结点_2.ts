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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || (head.next === null && n === 1)) {
    return null;
  }

  let slow = head;
  let fast = head;

  for (let i = 1; i <= n; i++) {
    if (fast === null) {
      return head;
    }

    fast = fast.next;
  }

  if (fast === null) {
    return head.next;
  }

  while (fast) {
    if (fast.next) {
      fast = fast.next;
      slow = slow.next;
    } else {
      slow.next = slow.next?.next;
      break;
    }
  }

   return head;
}


const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

const r = removeNthFromEnd(a, 0);

console.log(JSON.stringify(r));

export {};
