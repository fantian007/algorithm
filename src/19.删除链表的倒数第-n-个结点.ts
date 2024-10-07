import { ListNode } from './ListNode';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let p1 = undefined;
  let p2 = head;
  let i = 0;

  while (p2) {
    if (i === n) {
      p1 = head;
    } else {
      if (p1) {
        p1 = p1.next;
      }
    }

    p2 = p2.next;
    i++;
  }

  if (!p1) {
    return head.next;
  }

  p1.next = p1.next.next;

  return head;
};
