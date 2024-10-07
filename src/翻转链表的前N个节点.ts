
import { ListNode } from './ListNode';

let post: ListNode | null = null;

function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1) {
    post = head.next;
    return head;
  }

  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = post;

  return last;
};

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

const r = reverseN(a1, 2);
console.log(JSON.stringify(r));

export { }

