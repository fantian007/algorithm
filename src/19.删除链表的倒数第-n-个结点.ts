import { ListNode } from './ListNode';

/**
 * 思路：
 * 1. p2 先走 n 步，p1 初始化为 head
 * 2. 一起走，p2 走到末尾，p1 走到移除元素的前一个位置
 * 3. 如果 p1 还未初始化，说明需要移除的是 头节点
 * 4. 否则，移除 p1 后面的节点
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let p1 = undefined;
  let p2 = head;
  let i = 0;

  while (p2) {
    if (i === n) {
      p1 = head;
    } else {
      if (p1) {
        p1 = p1.next;
      }
    }

    p2 = p2.next;
    i++;
  }

  if (!p1) {
    return head.next;
  }

  p1.next = p1.next.next;

  return head;
};
