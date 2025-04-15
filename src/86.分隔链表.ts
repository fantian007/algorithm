import { ListNode, createLinkList } from './ListNode';

function partition(head: ListNode | null, x: number): ListNode | null {
  if (head === null) {
    return head;
  }

  // 需要移动、删除节点，考虑虚拟头节点（头结点也需要处理）
  const h = new ListNode();
  h.next = head;

  // x 前面比 x 大的第一个节点
  let p = h;

  // 计算出 p
  while (p.next) {
    if (p.next.val >= x) {
      break;
    }

    p = p.next;
  }

  // p2 找出比 x 小的数，p1 一直是 p2 的前一个节点
  let p1 = p;
  let p2 = p1.next;

  while (p2) {
    // 找出比 x 小的数
    if (p2.val < x) {
      // 将 p2 拿出
      p1.next = p2.next;
      // 将 p2 插入 p 的后面
      p2.next = p.next;
      p.next = p2;
      // p 后移（要求保留相对位置）
      p = p.next;
      // 将 p2 重置到 p1 的后面
      p2 = p1.next;
    }
    // 2个指针继续后移
    else {
      p1 = p1.next;
      p2 = p2.next;
    }
  }

  // 返回头节点
  return h.next;
};

const a = createLinkList([1, 4, 3, 2, 5, 2]);
const r = partition(a, 3);
console.log(JSON.stringify(r));
