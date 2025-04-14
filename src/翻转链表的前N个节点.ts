
import { ListNode, createLinkList } from './ListNode';

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

const a1 = createLinkList([1, 2, 3, 4, 5]);
const r = reverseN(a1, 2);
console.log(JSON.stringify(r));

export { }

