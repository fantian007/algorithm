import { ListNode, createLinkList } from './ListNode';

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null;
  }

  // 反转区间 [a, b)，头结点是 b-1
  const reverse = (a: ListNode, b: ListNode) => {
    let pre = null;
    let cur = a;
    let next = a;

    while (cur !== b) {
      next = cur.next;
      cur.next = pre;
      // 指针前进
      pre = cur;
      cur = next;
    }

    // prev = cur 之后，pre 就是新链表头节点，返回 pre
    return pre;
  }

  // 区间起始节点
  let a = head;
  // 区间结束节点
  let b = head;

  // b 移动 k 个位置，如果不够 k 个位置，直接返回 head，不反转
  for (let i = 0; i < k; i++) {
    if (b === null) {
      return head;
    } else {
      b = b.next;
    }
  };

  // 反转区间 [a, b)，返回新链表头节点
  const newHead = reverse(a, b);
  // [a,b) 反转之后，a 变为尾节点，a.next = 下一组的头结点
  a.next = reverseKGroup(b, k);

  // 返回每段反转之后的头节点
  return newHead;
};

const a1 = createLinkList([1, 2, 3, 4, 5]);
const r = reverseKGroup(a1, 3);
console.log(JSON.stringify(r));

export { };
