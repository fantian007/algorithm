import { ListNode, createLinkList } from './ListNode';

// 数组中元素 两两合并
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length) {
    return null;
  }

  // 合并 2 个有序列表
  const merge = (a: ListNode | null, b: ListNode | null) => {
    if (!a || !b) {
      return a || b;
    }

    const h = new ListNode(-1);
    let p = h;
    let p1 = a;
    let p2 = b;

    while (p1 && p2) {
      if (p1.val <= p2.val) {
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
  }

  // 两两合并
  let prev = lists.pop();

  while (lists.length) {
    const l = lists.pop();
    prev = merge(prev, l);
  }

  return prev;
};

const linkList = [createLinkList([1, 4, 5]), createLinkList([1, 3, 4]), createLinkList([2, 6])];
const r = mergeKLists(linkList);

console.log(r);
