/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 原理：尾部对齐
var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;

  if (!a || !b) {
    return null;
  }

  if (a === b) {
    return a;
  }

  // 让其中一个指针走到尾部
  while (a.next && b.next) {
    // 链表长度相同 + 有相交节点，会命中这里
    if (a === b) {
      return a;
    }

    a = a.next;
    b = b.next;
  }

  // headA 比较长
  if (a.next) {
    let i = 0;

    // 计算 headA 多出来的节点数量 i
    while (a.next) {
      a = a.next;
      i++;
    }

    // 重新指向开头，跳过 i 个节点
    a = headA;
    while (i--) {
      a = a.next;
    }

    // b 指向 headB 开头，此时，已对齐尾部
    b = headB;

    // 同时开始走
    while (a) {
      // 走的过程中进行判断
      if (a === b) {
        return a;
      }

      a = a.next;
      b = b.next;
    }

    return null;
  }
  // headB 比较长，原理同上
  else if (b.next) {
    let i = 0;

    while (b.next) {
      b = b.next;
      i++;
    }

    b = headB;
    while (i--) {
      b = b.next;
    }
    
    a = headA;

    while (a) {
      if (a === b) {
        return a;
      }

      a = a.next;
      b = b.next;
    }

    return null;
  }

  return null;
};

// =====

const a = new ListNode(35);
const b = new ListNode(37);
const c = new ListNode(39);
const d = new ListNode(41);
const e = new ListNode(42);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const f = new ListNode(36);
const g = new ListNode(38);
const h = new ListNode(40);

f.next = g;
g.next = h;
h.next = d;

const r = getIntersectionNode(a, f);

console.log(JSON.stringify(r));

export {};
