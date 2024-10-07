import { ListNode } from './ListNode';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let p1 = list1;
  let p2 = list2;

  // 虚拟头节点
  let h = new ListNode();
  let p = h;

  while (p1 && p2) {
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }

    p = p.next;
  }

  if (p1) {
    p.next = p1;
  }

  if (p2) {
    p.next = p2;
  }

  return h.next;
};

const a1 = new ListNode(-9);
const a2 = new ListNode(3);
a1.next = a2;

const b1 = new ListNode(5);
const b2 = new ListNode(7);
b1.next = b2;

const r = mergeTwoLists(a1, b1);
console.log(r);


export {};
