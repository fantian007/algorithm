import { ListNode } from './ListNode';

function copyRandomList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  // 用数组存放链表节点
  const nodes: ListNode[] = [];
  let p = head;

  // 遍历链表，将接入存入数组
  while (p) {
    nodes.push(p);
    p = p.next;
  }

  // arr 存放 [[元素值，random 索引], ...]
  p = head;
  let i = 0;
  const arr = nodes.map(node => [node.val, node.random ? nodes.findIndex(f => f === node.random) : null]);

  // 先用元素值 创建新链表
  const nextNodes = arr.map(t => new ListNode(t[0]));

  // 1. 将数组节点元素的 next 连接；2. 使用索引将 random 节点连接
  nextNodes.forEach((node, i) => {
    if (i < nextNodes.length - 1) node.next = nextNodes[i + 1];

    node.random = nextNodes[arr[i][1]];
  });

  // 返回新链表头节点
  return nextNodes[0];
};

const a = new ListNode(1);
const b = new ListNode(10, a);
const c = new ListNode(11, b);
const d = new ListNode(13, c);
const e = new ListNode(7, d);
e.random = a.next;
d.random = e;
c.random = a;
b.random = c;
a.random = e;

const r = copyRandomList(e);
console.log(r);
