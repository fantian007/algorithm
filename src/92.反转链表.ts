
import { ListNode } from './ListNode';

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  // 先写好前N个节点的反转
  const reverseN = (head: ListNode, n: number) => {
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

    return last;
  }

  // 如果 left为1，说明从头节点开始反转，到 right 停止（递归的终止条件）
  if (left === 1) {
    return reverseN(head, right);
  }

  // 递归
  head.next = reverseBetween(head.next, left - 1, right - 1);

  return head;
};

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

const r = reverseBetween(a1, 2, 4);
console.log(JSON.stringify(r));

export { }

