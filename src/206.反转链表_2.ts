import { ListNode } from './ListNode';

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let next = head;

  while (next) {
    const cur = next;
    next = next.next;
    cur.next = prev;
    prev = cur;
  }

  return prev;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);

a.next = b;
b.next = c;

const r = reverseList(a);

console.log(JSON.stringify(r));

export {};
