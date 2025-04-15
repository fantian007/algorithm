import { ListNode, createLinkList } from './ListNode';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 创建一个虚拟头节点，方便处理头节点可能被删除的情况
  const h = new ListNode(0, head);
  let prev = h;
  let cur = head;

  while (cur !== null) {
    let hasDuplicate = false;

    // 检查当前节点后面是否有重复节点
    while (cur.next !== null && cur.val === cur.next.val) {
      hasDuplicate = true;
      cur = cur.next;
    }

    if (hasDuplicate) {
      // 如果有重复节点，跳过所有重复节点
      prev.next = cur.next;
    } else {
      // 如果没有重复节点，移动到下一个节点
      prev = prev.next;
    }

    cur = cur.next;
  }

  return h.next;
}

const a = createLinkList([1, 2, 2, 5, 5]);
const r = deleteDuplicates(a);
console.log(JSON.stringify(r));
