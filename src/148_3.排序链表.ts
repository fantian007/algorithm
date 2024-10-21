import { ListNode, createLinkList } from './ListNode';

/**
 * 归并排序
 * 1. 不断递归找出中点，用中点将将链表分割成左右2个链表
 * 2. 对左右2个链表排序合并
 */
function sortList(head: ListNode | null): ListNode | null {
  // !head 返回 null
  // !head.next 返回 head
  if (!head || !head.next) {
    // 合并在一起，不要写成 return null
    return head;
  }

  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = slow.next;
  slow.next = null;

  const left = sortList(head);
  const right = sortList(fast);

  // 先递归，后排序，所以回溯过程中，上面的 left, right 是上次的排序合并结果，本次还未排序合并，需要排序+合并

  // 合并2个有序链表
  const h = new ListNode(-1);
  let p = h;
  let p1 = left;
  let p2 = right;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }

    p = p.next;
  }

  p.next = p1 ? p1 : p2;

  return h.next;
};

const linkList = createLinkList([4, 2, 1, 3]);
const r = sortList(linkList);

console.log(r);

export { }
