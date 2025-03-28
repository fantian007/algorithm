import { ListNode } from './ListNode';

// 用一个 map 记录遍历过的节点，当后续遍历的元素出现在 map 里，说明有环
function hasCycle(head: ListNode | null): boolean {
  const map = new Map<ListNode, 1>();

  let p = head;

  while (p) {
    if (map.get(p)) return true;

    map.set(p, 1);
    p = p.next;
  }

  return false;
};

const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
a.next = b;
b.next = c;
c.next = d;
// d.next = b; // 环

console.log(hasCycle(a));
