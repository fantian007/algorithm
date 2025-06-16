
// 大顶堆
class Heap {
  constructor(public arr: number[]) {
    const n = this.arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    };
  }

  swap(i: number, j: number) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  // 向下调整堆
  heapify(i: number) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    let largest = i;

    if (this.arr[l] > this.arr[largest]) {
      largest = l;
    }

    if (this.arr[r] > this.arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      this.swap(largest, i);
      this.heapify(largest);
    }
  }

  push(v: number) {
    this.arr.push(v);

    let i = this.arr.length - 1;
    let parentIndex = Math.floor((i - 1) / 2);

    while (this.arr[i] > this.arr[parentIndex]) {
      this.swap(i, parentIndex);

      i = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.arr.length === 0) return null;

    const head = this.arr.at(0);
    const tail = this.arr.at(-1);

    this.arr[0] = tail;
    this.arr.pop();
    // 尾元素替换掉头元素之后，要从头 heapify 一遍
    this.heapify(0);

    return head;
  }

  // 堆头元素
  peek() {
    return this.arr.at(0);
  }
}

/**
 * 使用 大顶堆 来获取 数组中最小的 k 个元素？
 * 1. 先将数组的前 k 个元素放入 大顶堆
 * 2. 从第 k + 1 个元素开始遍历数组，当遍历元素小于 堆顶元素，将堆顶元素去掉，当前元素放入堆
 * 3. 最终，堆中存放最小的 k 个元素
 */
const smallestK = (arr: number[], k: number) => {
  const heap = new Heap(arr.slice(0, k));

  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap.peek()) {
      heap.pop();
      heap.push(arr[i]);
    }
  };

  return heap.arr;
}

const r = smallestK([1, 3, 2, 5, 4, 6], 2);
console.log(r);

export { }
