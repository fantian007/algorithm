import { ListNode, createLinkList } from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // 将 head.next 之后的反转，返回反转链表的头节点
  const last = reverseList(head.next);
  // head.next 是反转链表的尾结点啊，尾节点.next 拼接 head
  head.next.next = head;
  // 防止环形链表
  head.next = null;

  // 返回反转链表的头节点
  return last;
};

const a = createLinkList([1, 2, 3, 4]);
const r = reverseList(a);

console.log(JSON.stringify(r));

export { };
