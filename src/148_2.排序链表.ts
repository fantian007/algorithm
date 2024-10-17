import { ListNode, createLinkList } from './ListNode';

/**
 * 遍历列表值为数组，排序，原地复用之前链表节点，只改值
 */
function sortList(head: ListNode | null): ListNode | null {
  let vals = [];

  let p = head;
  while (p) {
    vals.push(p.val);
    p = p.next;
  }

  vals = vals.sort((a, b) => a - b);

  p = head;
  let i = 0;

  while (i < vals.length) {
    p.val = vals[i];

    p = p.next;
    i++;
  }

  return head;
};

const linkList = createLinkList([4, 2, 1, 3]);
const r = sortList(linkList);

console.log(r);

export { }
