/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 * hash + 双向链表
 */


// @lc code=start

/**
 * 双链表节点
 */
 class LinkListNode {
    key: number;
    value: number;
    prev: LinkListNode;
    next: LinkListNode;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * 双链表
 */
class DoubleLinkedList {
    head: LinkListNode;
    tail: LinkListNode;
    size: number = 0;

    constructor() {
        // 头尾虚拟节点
        this.head = new LinkListNode(-1, -1);
        this.tail = new LinkListNode(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * 链表尾部添加节点
     */
    addLast(x: LinkListNode) {
        x.prev = this.tail.prev;
        x.next = this.tail;

        this.tail.prev.next = x;
        this.tail.prev = x;

        this.size++;
    }

    /**
     * 删除链表中节点
     */
    remove(x: LinkListNode) {
        x.prev.next = x.next;
        x.next.prev = x.prev;
        this.size--;
    }

    /**
     * 删除链表中第一个节点，并返回该节点
     */
    removeFirst() {
        if (this.head.next === this.tail) {
            return null;
        }

        const n = this.head.next;

        this.remove(n);

        return n;
    }
}

class LRUCache {
    hashMap: Map<number, LinkListNode> = new Map();
    cache: DoubleLinkedList = new DoubleLinkedList();
    capacity: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    /**
     * 将某个key提升为最近使用的
     */
    makeRecently(key: number) {
        const x = this.hashMap.get(key);

        this.cache.remove(x);
        // 重新插入队尾
        this.cache.addLast(x);
    }

    /**
     * 添加新节点
     */
    addRecently(key: number, val: number) {
        const x = new LinkListNode(key, val);

        this.cache.addLast(x);
        this.hashMap.set(key, x);
    }

    /**
     * 删除key
     */
    deleteKey(key: number) {
        const x = this.hashMap.get(key);
        
        this.cache.remove(x);
        this.hashMap.delete(x.key);
    }

    /**
     * 删除最久的 key
     */
    removeLeastRecently () {
        const least = this.cache.removeFirst();
    
        least && this.hashMap.delete(least!.key);
    }

    get(key: number) {
      if (this.hashMap.has(key)) {
        // 提升
        this.makeRecently(key);

        return this.hashMap.get(key).value;
      } else {
        return -1;
      }
    }

    put(key: number, value: number): void {
        if (this.hashMap.has(key)) {
            this.deleteKey(key);
            this.addRecently(key, value);
        } else {
            if (this.cache.size >= this.capacity) {
                this.removeLeastRecently();
            }

            this.addRecently(key, value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// const c = new LRUCache(2);
// c.put(1, 1);
// c.put(2, 2);
// c.get(1);
// c.put(3, 3);
// c.get(2);

