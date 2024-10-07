import { ListNode } from './ListNode';

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // 前N个反转
  const reverseN = (head: ListNode, n: number) => {
    if (head === null || head.next === null) {
      return head;
    }

    if (n === 1) {
      return head;
    }

    // 新链表头节点
    const last = reverseN(head.next, n - 1);
    // 假设 [1,2,3]反转，那么 post = 3
    const post = head.next.next;
    // 反转节点（每次递归反正2个节点），变为 [2,1,3]
    head.next.next = head;
    // 将 1.next 设置为 3
    head.next = post;

    // 返回头节点
    return last;
  }

  // 区间反转
  const reverseBetween = (head: ListNode | null, m: number, n: number) => {
    if (m === 1) {
      return reverseN(head, n);
    }

    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
  }

  // 计算 链表 长度
  let len = 0;
  let p = head;
  while (p) {
    len++;
    p = p.next;
  }

  // 利用区间反转，实现 K 个一组反转
  for (let i = 1, j = i + k - 1; j <= len; i = j + 1, j = i + k - 1) {
    head = reverseBetween(head, i, j);
  };

  return head;
};


const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
const a6 = new ListNode(6);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;

const r = reverseKGroup(a1, 3);
console.log(JSON.stringify(r));

export { };
