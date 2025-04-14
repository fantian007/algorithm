import { ListNode, createLinkList } from './ListNode';

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
    const h = reverseN(head.next, n - 1);

    // 暂存 head.next 的 下一个节点
    const _t = head.next.next;
    // 反转前2个节点
    head.next.next = head;
    // 尾结点 接 暂存节点
    head.next = _t;

    // 返回头节点
    return h;
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

const a1 = createLinkList([1, 2, 3, 4, 5, 6]);

const r = reverseKGroup(a1, 3);
console.log(JSON.stringify(r));

export { };
