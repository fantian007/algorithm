import { ListNode, createLinkList } from './ListNode';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || (head.next === null && n === 1)) {
    return null;
  }

  // 快慢指针
  let slow = head;
  let fast = head;

  // fast 移动到第 n 个节点
  for (let i = 1; i <= n; i++) {
    // 如果 n 比链表还长，不删除，返回头节点
    if (fast === null) {
      return head;
    }

    fast = fast.next;
  }

  // 如果 fast 正好是尾结点的下一个节点，那么返回头节点的下一个节点（相当于删除了头节点）
  if (fast === null) {
    return head.next;
  }

  while (fast) {
    // 2个指针同时后移
    if (fast.next) {
      fast = fast.next;
      slow = slow.next;
    } else {
      // 删除倒数第 n 个节点
      slow.next = slow.next?.next;
      break;
    }
  }

  return head;
}

const a = createLinkList([1, 2, 3, 4]);
const r = removeNthFromEnd(a, 0);

console.log(JSON.stringify(r));

export { };
