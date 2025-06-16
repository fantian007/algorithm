import { ListNode } from "./ListNode";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  const arr = [];

  let cur = head;

  while (cur !== null) {
    arr.push(cur.val);

    cur = cur.next;
  }

  while (arr.length) {
    if (arr.length === 1) {
      return true;
    }

    const left = arr.shift();
    const right = arr.pop();

    if (left !== right) {
      return false;
    }
  }

  return true;
};

export { }
