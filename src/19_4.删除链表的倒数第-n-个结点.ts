import { ListNode, createLinkList } from './ListNode';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;

  const h = new ListNode(0, head);

  let p1 = h;
  let p2 = h;

  for (let i = 0; i < n; i++) {
    p2 = p2.next;
  }

  while (p2.next) {
    p2 = p2.next;
    p1 = p1.next;
  }

  p1.next = p1.next.next;

  return h.next;
};

const a = createLinkList([1, 2, 3, 4, 5]);
// const r = removeNthFromEnd(a, 1);
const r = removeNthFromEnd(a, 2);

console.log(JSON.stringify(r));

export { };
