import { ListNode } from "./ListNode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let slow = head;
  let fast = head.next;

  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast;

      // slow 也要前进，变量重新赋值
      slow = slow.next;
    }

    fast = fast.next;
  }

  // 断开后面链接，垃圾自动回收
  slow.next = null;

  return head;
};

export {}
