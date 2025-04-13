
import { ListNode } from './ListNode';

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head.next) return head;

  const h = new ListNode(0, head);
  let p0 = h;

  for(let i = 0; i < left - 1; i++) {
    p0 = p0.next;
  };

  let prev = null;
  let cur = p0.next;

  for(let i = 0; i < right - left + 1; i++) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  };

  // p0 = ListNode(1);
  // cur = ListNode（5;

  // 2 后面要接 5
  p0.next.next = cur;
  // 1 后面要接 4
  p0.next = prev;
  
  // 注意：不能直接返回 head
  return h.next;
};

const a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const r = reverseBetween(a, 2, 4);
console.log(JSON.stringify(r));

export { }

