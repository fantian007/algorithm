import { ListNode, createLinkList } from './ListNode';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }

  // 虚拟头节点
  let s = new ListNode(-1), p = s;

  let queue = new Array();

  /**
   * 将每个链表的头节点放入队列
   */
  for (const node of lists) {
    if (node) {
      queue.push(node);
    }
  }

  while (queue.length) {
    // 队列元素从小到大排序
    queue = queue.sort((a, b) => {
      return a.val - b.val;
    });

    // 最小元素的头节点
    const n = queue.shift();

    // 将最小元素节点接入链表
    p.next = n;

    // 如果后面还有元素，放入队列，重新参与排序
    if (n.next) {
      queue.push(n.next);
    }

    // 指针后移，接收新的元素
    p = p.next;
  }

  // 去掉虚拟头节点
  return s.next;
};

const linkList = [createLinkList([1, 4, 5]), createLinkList([1, 3, 4]), createLinkList([2, 6])];
const r = mergeKLists(linkList);

console.log(r);
