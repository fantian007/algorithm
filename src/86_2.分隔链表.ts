import { ListNode, createLinkList } from './ListNode';

function partition(head: ListNode | null, x: number): ListNode | null {
  if (head === null) {
    return head;
  }

  // 构建 2个 新链表

  // 存放小于 x 的节点
  const h1 = new ListNode();
  // 存放 大于等于 x 的节点
  const h2 = new ListNode();

  // 遍历 h1
  let p1 = h1;
  // 遍历 h2
  let p2 = h2;
  // 遍历原链表
  let p = head;

  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }

    p = p.next;
  }

  // h1 的末尾 接 h2(去掉虚拟头节点)
  p1.next = h2.next;
  // 末尾设为 null, 防止形成环
  p2.next = null;

  return h1.next;
};

const a = createLinkList([1, 4, 3, 2, 5, 2]);
const r = partition(a, 3);
console.log(JSON.stringify(r));
