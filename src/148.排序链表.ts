import { ListNode, createLinkList } from './ListNode';

/**
 * 遍历列表值为数组，排序，重新构建链表
 */
function sortList(head: ListNode | null): ListNode | null {
  let vals = [];

  let p = head;
  while (p) {
    vals.push(p.val);
    p = p.next;
  }

  vals = vals.sort((a, b) => a - b);

  return createLinkList(vals);
};

const linkList = createLinkList([4, 2, 1, 3]);
const r = sortList(linkList);

console.log(r);

export { }
