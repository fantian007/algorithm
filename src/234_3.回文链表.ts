import { createLinkList, ListNode } from "./ListNode";

// 反转链表
const reverse = (head: ListNode) => {
  let pre = null;
  let cur = head;
  let nxt = head;

  while (cur !== null) {
    nxt = cur.next;
    cur.next = pre;
    // 移动指针
    pre = cur;
    cur = nxt;
  }

  return pre;
}


/**
 * 思路：快慢指针找到中点，反转后半部分链表，然后2部分链表再对比值
 */
function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  /**
   * 1. 快慢指针找中点，用于反转后半部分链表
   */
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 注意这句
  // 节点个数为奇数，slow 移动到下一个节点
  if (fast !== null) {
    slow = slow.next;
  }

  let left = head;
  // 反转后半部分链表
  let right = reverse(slow);

  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
};

// const tree = createLinkList([0, 0]); true
const tree = createLinkList([1, 0]); // false
// const tree = createLinkList([1, 2, 3, 4, 5]); // false
const r = isPalindrome(tree);
console.log(r); // true

export { }
