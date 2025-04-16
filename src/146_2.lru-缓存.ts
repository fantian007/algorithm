/**
 * 双链表节点
 */
class LinkListNode {
  key: number;
  val: number;
  prev: this | null;
  next: this | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}

/**
 * 双链表
 * 1. 添加尾部节点（最近使用）
 * 2. 删除节点 （删除后，再添加到尾部，相当于更新节点到最近使用）
 * 3. 删除首节点（超出阈值时，首先删除首节点，最久未使用节点）
 */
class DoubleLinkedList {
  head = new LinkListNode(-1, -1);
  tail = new LinkListNode(-1, -1);
  size = 0;

  constructor () {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * 添加到链表尾部
   */
  addLast (node: LinkListNode) {
    // 插入点 前面节点
    const p = this.tail.prev;
    // 插入点 后面节点
    const n = this.tail;
  
    p.next = node;
    node.prev = p;

    node.next = n;
    n.prev = node;

    this.size++;
  }

  /**
   * 移除节点
   */
  remove(node: LinkListNode) {
    const p = node.prev;
    const n = node.next;
    
    p.next = n;
    n.prev = p;

    this.size--;
  }
  
  /**
   * 移除第一个节点
   */
  removeFirst () {
    if (this.size === 0) return null;

    const f = this.head.next;
    this.remove(f);

    return f.key;
  }
}

/**
 * LRU
 */
class LRUCache {
  // 双链表记录节点（tail 是最近使用的, head 是很久未使用的）
  cache = new DoubleLinkedList();
  // map 记录 k: 节点 的映射，加速查找
  map = new Map<number, LinkListNode>();
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  /**
   * 移动节点到双链表尾部（更新为最近使用）
   */
  makeRecent(key: number) {
    const node = this.map.get(key);

    if (node) {
      this.cache.remove(node);
      this.cache.addLast(node);
    }
  }

  get(key: number): number {
    // 更新最近使用
    this.makeRecent(key);

    return this.map.get(key)?.val ?? -1;
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);

    // 有缓存，更新值
    if (node) {
      node.val = value;
    }
    // 无缓存，添加值
    else {
      const _node = new LinkListNode(key, value);
      // 添加到尾部
      this.cache.addLast(_node);
      // map 中也要添加
      this.map.set(key, _node);
    }

    // 更新最近使用
    this.makeRecent(key);

    // 超容量
    if (this.cache.size > this.capacity) {
      // 删除缓存首节点
      const _k = this.cache.removeFirst();
      // map 中也要删除
      this.map.delete(_k);
    }
  }
}

const a = new LRUCache(2);
a.put(1, 0);
a.put(2, 2);
console.log(a.get(1)); // 0
a.put(3, 3);
console.log(a.get(2)); // -1
a.put(4, 4);
console.log(a.get(1)); // -1
console.log(a.get(3)); // 3
console.log(a.get(4)); // 4

export { }
