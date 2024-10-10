/**
 * 双链表节点
 */
class LinkListNode {
  // LRU 以 node 为主，包括排序也是基于 node 排序，不依赖与 map 元素的顺序，map 只用来提速查询
  key: number;
  value: number;
  prev: this | null = null;
  next: this | null = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class DoubleLinkedList {
  // 虚拟头尾节点
  head = new LinkListNode(-1, -1);
  tail = new LinkListNode(-1, -1);
  // map 只做查询，不要依赖 map.size，在链表中手动记录 size
  size = 0;

  constructor() {
    // 头尾节点连接
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 将节点添加到链表尾部（最近使用）
  addLast(node: LinkListNode) {
    // 前后节点（最好这样重命名一下，更明确，否则容易写乱），中间插入 node
    const beforeNode = this.tail.prev;
    const afterNode = this.tail;

    beforeNode.next = node;
    node.prev = beforeNode;

    node.next = afterNode;
    afterNode.prev = node;

    this.size++;
  }

  // 移除节点
  remove(node: LinkListNode) {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.size--;
  }

  // 移除第一个节点
  // 删除 首节点，需要将 map 中对应节点删除，需要知道 node 在 map 中对应的 key, 这也是为什么 node 中需要存储 key 字段 的原因
  removeFirst() {
    if (this.head.next === this.tail) {
      return null;
    }

    const node = this.head.next;
    this.remove(node);
    return node.key;
  }
}

class LRUCache {
  // 缓存容量
  capacity: number = 0;
  // 双链表
  cache = new DoubleLinkedList();
  // 记录 { key: 节点 }，方便查找(直接用双链表记录 key 查找也行，但是 map 更快)
  map = new Map<number, LinkListNode>();

  constructor(capacity = 0) {
    this.capacity = capacity;
  }

  // 将节点提升到最近使用位置，先删除，再添加到尾部（非添加/删除操作，不操作 map）
  makeRecent(node: LinkListNode) {
    this.cache.remove(node);
    this.cache.addLast(node);
  }

  // 将节点添加到最近使用位置
  addRecent(node: LinkListNode) {
    this.cache.addLast(node);
    // 链表中添加元素，map 中也要添加
    this.map.set(node.key, node);
  }

  // 移除第一个节点
  removeFirst() {
    const k = this.cache.removeFirst();

    if (k !== null) {
      // 链表中删除元素，map 也要删除
      this.map.delete(k);
    }
  }

  get(key: number) {
    const node = this.map.get(key);

    if (node) {
      // 移动到链表尾部（最近使用）
      this.makeRecent(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    const old = this.map.get(key);

    if (old) {
      // 更新值
      old.value = value;
      // 移动到尾部
      this.makeRecent(old);
    } else {
      // 新节点
      const node = new LinkListNode(key, value);
      // 添加到尾部
      this.addRecent(node);
    }

    if (this.cache.size > this.capacity) {
      this.removeFirst();
    }
  }
}

const c = new LRUCache(2);
c.put(2, 1);
c.put(2, 2);
console.log(c.get(2)); // 2
c.put(1, 1);
c.put(4, 1);
console.log(c.get(2)); // -1

export { };
