import { ListNode } from "./ListNode";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let left = head;

  /**
   * 先压栈，再出栈，节点的遍历顺序就是倒着的（相当于链表的后序遍历）
   * right 从后往前遍历
   * left 从前往后遍历
   * 如果全程对称相等，那么就是回文链表
   */
  const traverse = (node: ListNode | null) => {
    if (node === null) {
      return true;
    }

    // 1. 如果当前节点(node)的后序节点和 left 比较都符合回文
    let res = traverse(node.next);
    // 2. 并且当前节点(node)和 left 比较也符合回文
    res = res && node.val === left.val;

    // left 后移
    left = left.next;

    return res;
  }

  return traverse(head);
};

export { }
