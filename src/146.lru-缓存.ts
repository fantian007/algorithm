/**
 * 使用 map，map 可以保证插入的顺序
 * 每次操作（取、存）都将操作的数放到 map 尾部
 *  1. map 中已存在，先删除，再放尾部
 *  2. map 中不存在，直接放尾部
 * 存的时候，判断容量是否超限，如超限，删除 map 中头部元素
 */
class LRUCache {
  cache: Map<number, number> = new Map();
  capacity: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const v = this.cache.get(key);

      // 先删除，再插入，放入最后的位置
      this.cache.delete(key);
      this.cache.set(key, v);

      return v;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      // 注意：put 也要更新最近使用（先删除，再更新）
      this.cache.delete(key);
    } else {
      // 容量超了，删除第一个数
      if (this.cache.size >= this.capacity) {
        // 最久的 key
        const firstKey = this.cache.keys().next().value;

        this.cache.delete(firstKey);
      }
    }

    this.cache.set(key, value);
  }
}

export { }
