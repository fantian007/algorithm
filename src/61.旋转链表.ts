
import { ListNode, createLinkList } from './ListNode';

// 将链表拆开 + 拼接
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let len = 0;
  let p1 = head;

  while (p1) {
    len++;
    p1 = p1.next;
  }

  // 链表为空
  if (len === 0) {
    return null;
  }

  // 正好整数倍，不移动
  if (k % len === 0) {
    return head;
  }

  // 分割位置
  let s = len - k % len;

  // 虚拟节点
  const h = new ListNode();
  h.next = head;
  // 前一个节点
  let p2 = h;
  // 分割点
  let p3 = head;

  // 同时移动
  while (s--) {
    p2 = p2.next;
    p3 = p3.next;
  }

  // 尾节点
  let p4 = p3;
  while (p4.next) {
    p4 = p4.next;
  }

  // 从分割点断开
  p2.next = null;
  // 拼接
  p4.next = head;

  // 返回头节点
  return p3;
};

const a = createLinkList([1, 2, 3, 4, 5]);
const r = rotateRight(a, 2); // 2,3,4,5,1
console.log(JSON.stringify(r));
