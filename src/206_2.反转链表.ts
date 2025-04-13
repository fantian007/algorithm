import { ListNode, createLinkList } from './ListNode';

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
const a = createLinkList([1, 2, 3]);
const r = reverseList(a);

console.log(JSON.stringify(r));

export {};
