/**
 * 大顶堆
 * @see https://segmentfault.com/a/1190000042515702
 * @see https://github.com/datastructures-js/priority-queue/blob/v5/README.md
 * 小顶堆改判断条件 大于为小于即可
 * 堆尾入栈，堆头出栈
 * 大顶堆不是整体有序的，是为了选举出最大的一个数
 * 大顶堆可用于选出 一堆数中前 K 个最小数，K 必须完全 = 堆的大小（大于 K 个数（达到堆size）的大数出栈，剩下的就是 K 个较小的数）
 * 小顶堆可用于选出 一堆数中前 K 个最大数，K 必须完全 = 堆的大小
 */
class Heap {
  arr: number[] = [];

  swap(i1, i2) {
    [this.arr[i1], this.arr[i2]] = [this.arr[i2], this.arr[i1]];
  }

  push(v: number) {
    this.arr.push(v);
    let i = this.arr.length - 1;
    let parentIndex = Math.floor((i - 1) / 2);

    while (this.arr[i] > this.arr[parentIndex]) {
      this.swap(i, parentIndex);

      i = parentIndex;
      parentIndex = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    const top = this.arr[0];
    const tail = this.arr[this.arr.length - 1];
    // 将堆尾元素给堆头
    this.arr[0] = tail;
    // 删除堆尾元素
    this.arr.pop();

    let i = 0;
    let leftIndex = 1;
    let rightIndex = 2;

    while (rightIndex < this.arr.length) {
      const maxIndex =
        this.arr[leftIndex] > this.arr[rightIndex] ? leftIndex : rightIndex;

      if (this.arr[i] < this.arr[maxIndex]) {
        this.swap(i, maxIndex);
      }

      i = maxIndex;
      leftIndex = 2 * i + 1;
      rightIndex = 2 * i + 2;
    }

    // 输出堆头
    return top;
  }
}

const h = new Heap(10);
h.push(1);
h.push(4);
h.push(3);
h.push(2);
h.push(4);

console.log(h.arr);
console.log(h.pop());
