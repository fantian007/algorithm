import { ListNode } from './ListNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 构建新链表，存结果
  const n = new ListNode();

  let p1 = l1;
  let p2 = l2;
  let p3 = n;

  // 进位
  let c = 0;

  while (p1 && p2) {
    const v = p1.val + p2.val + c;

    c = v >= 10 ? 1 : 0;
    p3.next = new ListNode(v % 10);

    p1 = p1.next;
    p2 = p2.next;
    p3 = p3.next;
  }

  // 检查 l1 是否遍历完毕
  while (p1) {
    const v = c + p1.val
    p3.next = new ListNode(v % 10);

    c = v >= 10 ? 1 : 0;

    p1 = p1.next;
    p3 = p3.next;
  }

  // 检查 l2 是否遍历完毕
  while (p2) {
    const v = c + p2.val
    p3.next = new ListNode(v % 10);

    c = v >= 10 ? 1 : 0;

    p2 = p2.next;
    p3 = p3.next;
  }

  // 检查是否有 进位
  if (c) {
    p3.next = new ListNode(c);
  }

  return n.next;
};

export { }
