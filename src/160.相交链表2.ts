import { ListNode } from './ListNode';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p1 = headA;
  let p2 = headB;

  let lenA = 0;
  let lenB = 0;

  while (p1) {
    p1 = p1.next;
    lenA++;
  }
  while (p2) {
    p2 = p2.next;
    lenB++;
  }

  p1 = headA;
  p2 = headB;

  // 长的链表先走 lenA - lenB 步，为了和短链表从同一位置后移指针
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      p1 = p1.next;
    }
  }

  if (lenB > lenA) {
    for (let i = 0; i < lenB - lenA; i++) {
      p2 = p2.next;
    }
  }

  // 一起后移
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
 
  return p1;
};

export {};
