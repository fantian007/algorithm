
import { ListNode } from './ListNode';

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  /**
   * 反转链表的前 n 个节点
   * 1. 每次反转 2 个节点
   */
  const reverseN = (head: ListNode, n: number) => {
    // 递归终止条件，当节点剩下1个，直接返回
    if (n === 1) {
      return head;
    }

    // 已反转链表的头节点
    // 接下来只需要将 head, head.next 2个节点反转
    const last = reverseN(head.next, n - 1);

    // 暂存 head.next 的下一个节点
    const _t = head.next.next;
    // head.next 指向 head
    head.next.next = head;
    // 反转之后，再 next 连接暂存节点
    head.next = _t;

    // 返回 头节点
    return last;
  }

  // left === 1，直接反转 前 n 个 节点
  if (left === 1) {
    return reverseN(head, right);
  }

  // 否则，反转 区间
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

const r = reverseBetween(a1, 1, 3);
console.log(JSON.stringify(r));

export { }

