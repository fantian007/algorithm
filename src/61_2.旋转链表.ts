
import { ListNode, createLinkList } from './ListNode';

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  // 计算链表长度
  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }

  // 取余
  k = k % len;
  // 余数为0，不需要移动
  if (k === 0) {
    return head;
  }

  // 找到新的尾节点和新的头节点
  let newTail = head;
  for (let i = 0; i < len - k - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  tail.next = head;

  return newHead;
}

const a = createLinkList([1, 2, 3, 4, 5]);
const r = rotateRight(a, 2); // 4,5,1,2,3
console.log(JSON.stringify(r));
