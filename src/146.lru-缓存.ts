/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 * 利用 Map 键具有顺序的特性
 */

// @lc code=start
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
            this.cache.delete(key);
        } else {
            if (this.cache.size >= this.capacity) {
                // 最久的 key
                const firstKey = this.cache.keys().next().value;

                this.cache.delete(firstKey);
            }
        }

        this.cache.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

