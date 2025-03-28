import { ListNode } from "./ListNode";

// 快慢指针
function hasCycle(head: ListNode | null): boolean {
  let p1, p2;
  p1 = p2 = head;

  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    // 快慢指针最终相遇，则说明有环
    if (p1 === p2) {
      return true;
    }
  }

  return false;
};


const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
a.next = b;
b.next = c;
c.next = d;
// d.next = b; // 环

console.log(hasCycle(a));
