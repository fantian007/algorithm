import { PriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
  const r = [];
  const map = new Map();

  for (const v of nums) {
    map.set(v, (map.get(v) ?? 1) + 1);
  }

  // 小顶堆
  const heap = new PriorityQueue<{ v: number; c: number }>((a, b) => a.c - b.c);

  for (const [v, c] of map) {
    // 存入小顶堆
    heap.enqueue({ v, c });

    // 将最小的元素弹出，保留 K 个高频数
    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  // 最后剩余的就是所有数中 K 个高频数
  while (heap.size()) {
    r.push(heap.dequeue().v);
  }

  return r.reverse();
}

const r = topKFrequent([4, 1, -1, 2, -1, 2, 3, 4, 4, 4], 3);

console.log(r);

export {};
