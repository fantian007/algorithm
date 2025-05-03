import { ListNode } from './ListNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 构建新链表，存结果
  const n = new ListNode();

  let p1 = l1;
  let p2 = l2;
  let p3 = n;

  // 进位
  let c = 0;

  while (p1 || p2) {
    let v = c;

    if (p1) {
      v += p1.val;
      p1 = p1.next;
    }

    if (p2) {
      v += p2.val;
      p2 = p2.next;
    }

    c = v >= 10 ? 1 : 0;
    p3.next = new ListNode(v % 10);

    p3 = p3.next;
  }

  // 检查是否有 进位
  if (c) {
    p3.next = new ListNode(c);
  }

  return n.next;
};

export { }
