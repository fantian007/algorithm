import { Heap } from './Heap';

/**
 * 要求 O(nlogn) 的算法
 */
function findKthLargest(nums: number[], k: number): number {
  // 大顶堆
  const h = new Heap(nums);

  let r = -1;

  while (k--) {
    // 弹出 k 次，最后一次就是 第 K 大元素
    r = h.pop();
  }

  return r;
}

const r = findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5
console.log(r);

export { }
