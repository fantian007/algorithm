import { ListNode } from './ListNode';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 记录链表中各个节点的数量
  const map = {};

  let p1 = head;

  while (p1) {
    map[p1.val] = (map[p1.val] || 0) + 1;

    p1 = p1.next;
  }

  // 虚拟头节点
  const h = new ListNode(-Infinity);
  h.next = head;
  let p2 = h;

  while (p2.next) {
    // 重复元素
    if (map[p2.next.val] > 1) {
      // 删除元素
      p2.next = p2.next.next;
    } else {
      p2 = p2.next;
    }
  }

  return h.next;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(2);
const d = new ListNode(5);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const r = deleteDuplicates(a);
console.log(JSON.stringify(r));
