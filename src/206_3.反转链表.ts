import { ListNode, createLinkList } from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;

  let prev = head;
  let cur = prev.next;

  // 头节点.next 设置为 null, 防止环形链表
  prev.next = null;

  while (cur) {
    const _next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = _next;
  }

  return prev;
};

const a = createLinkList([1, 2, 3, 4]);
const r = reverseList(a);

console.log(JSON.stringify(r));

export { };
