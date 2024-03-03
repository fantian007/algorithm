class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}
}

class MyLinkedList {
  constructor(public root: ListNode | null = null) {}

  get(index: number): number {
    let i = 0;
    let cur = this.root;

    while (cur) {
      if (index === i) {
        return cur.val;
      }

      cur = cur.next;
      i++;
    }

    return -1;
  }

  addAtHead(val: number): void {
    const h = new ListNode(val, this.root);

    this.root = h;
  }

  addAtTail(val: number): void {
    let head = new ListNode(0, this.root);
    let cur = head;

    while (cur?.next) {
      cur = cur.next;
    }

    cur.next = new ListNode(val);

    this.root = head.next;
  }

  addAtIndex(index: number, val: number): void {
    let i = 0;
    let head = new ListNode(0, this.root); // 虚拟头节点
    let cur = head;
    let find = false;

    while (cur?.next) {
      if (index === i) {
        cur.next = new ListNode(val, cur.next);
        find = true;
        break;
      } else {
        cur = cur.next;
      }

      i++;
    }

    if (!find) {
      // 当 index 等于链表的长度，加到末尾
      if (index === i) {
        cur.next = new ListNode(val);
      }
    }

    // 修改类操作，一定要更新头结点（如果是添加到了头节点之前，那么就需要用 head.next 更新 root）
    this.root = head.next;
  }

  deleteAtIndex(index: number): void {
    let i = 0;
    let head = new ListNode(0, this.root);
    let cur = head;

    while (cur?.next) {
      if (i === index) {
        cur.next = cur.next?.next;
        break;
      }

      cur = cur.next;
      i++;
    }

    // 修改类操作，一定要更新头结点（如果是删除了头节点，那么就需要用 head.next 更新 root）
    this.root = head.next;
  }
}

var obj = new MyLinkedList();
// obj.addAtHead(7);
// obj.addAtHead(2);
// obj.addAtHead(1);
// obj.addAtIndex(3, 0);
// obj.deleteAtIndex(2);
// obj.addAtHead(6);
// obj.addAtTail(4);
// obj.get(4);
// obj.addAtHead(4);
// obj.addAtIndex(5, 0);
// obj.addAtHead(6);
// ================
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
obj.get(1);
obj.deleteAtIndex(1);
obj.get(0);

// 让当前文件变为模块文件，防止多个文件同名变量冲突
export {};
