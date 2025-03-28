import { ListNode, createLinkList } from './ListNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 || !l2) return l1 ?? l2;

  let p1 = l1;
  let p2 = l2;
  let c = 0;
  // p1 的前一个节点
  let prev = null;

  // 有一个存在就循环，为了复用同一套逻辑
  // 结果都加到 l1 上
  while (p1 || p2) {
    // 如果 p1 存在，p2 不存在，给 l2 补齐长度
    p2 ??= new ListNode(0);

    const v = p1.val + p2.val + c;

    p1.val = v % 10;
    c = Math.floor(v / 10);

    prev = p1;
    p1 = p1.next;
    p2 = p2.next;

    // 如果 p2 存在，p1 不存在，给 l1 补齐长度
    if (!p1 && p2) {
      p1 = new ListNode(0);
      prev.next = p1;
    }
  }

  // 如果有进位，需要将进位节点加到 l1
  if (c) {
    prev.next = new ListNode(c);
  }

  return l1;
};

// const l1 = createLinkList([2, 4, 3]);
// const l2 = createLinkList([5, 6, 4]);
// const r = addTwoNumbers(l1, l2); // [7,0,8]

const l1 = createLinkList([2, 4, 9]);
const l2 = createLinkList([5, 6, 4, 9]);
const r = addTwoNumbers(l1, l2); // [7,0,4,0,1]
console.log(r);

export { }
