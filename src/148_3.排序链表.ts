import { ListNode, createLinkList } from './ListNode';

/**
 * 归并排序
 * 1. 不断递归找出中点，用中点将将链表分割成左右2个链表
 * 2. 对左右2个链表排序合并
 */
function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = slow.next;
  slow.next = null;

  let left = sortList(head);
  let right = sortList(fast);

  const h = new ListNode();
  let p = h;

  while (left && right) {
    if (left.val <= right.val) {
      p.next = left;
      left = left.next;
    } else {
      p.next = right;
      right = right.next;
    }

    p = p.next;
  }

  p.next = left ? left : right;

  return h.next;
};

const linkList = createLinkList([4, 2, 1, 3]);
const r = sortList(linkList);

console.log(r);

export { }
