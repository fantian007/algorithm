import { ListNode } from './ListNode';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 虚拟节点
  const h = new ListNode();
  h.next = head;

  // p1 指向虚拟节点，p2 指向头节点
  let p1 = h;
  let p2 = p1;

  // p2 移动到倒数第 n 个节点
  while (n-- > 0) {
    p2 = p2.next;
  }

  // p1,p2 同时后移（p2 会移动到最后一个有值的节点，就是尾结点）
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // 删除 p1 的下一个节点（倒数第n个节点）
  p1.next = p1.next.next;

  // 头结点被删除，p1 未移动，返回 p1.next
  //   1. 只有头节点，那么 p1.next 为 null
  //   2. 不只有头节点，返回头节点的下一个节点
  // 删除的不是头节点，那么 p1 会移动，返回 head
  return p1 === h ? p1.next : head;
}


const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// const r = removeNthFromEnd(a, 1);
const r = removeNthFromEnd(a, 2);

console.log(JSON.stringify(r));

export {};
