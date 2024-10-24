/**
 * 大顶堆
 */
export class Heap {
  constructor(public arr: number[]) {
    this.create();
  }

  /**
   * 交换值
   */
  private swap(i: number, j: number) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  /**
   * 递归调整
   */
  private heapify(i: number) {
    const n = this.arr.length;

    // 左右子节点下标
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    // 当前节点小于左节点，交换
    if (l < n && this.arr[i] < this.arr[l]) {
      this.swap(i, l);
      // 递归处理左节点，因为左节点交换得到一个较小的值之后，可能比它自身的子节点小了
      this.heapify(l);
    }

    // 当前节点小于右节点，交换
    if (r < n && this.arr[i] < this.arr[r]) {
      this.swap(i, r);
      // 递归，同上
      this.heapify(r);
    }
  }

  /**
   * 由数组创建大顶堆
   */
  private create() {
    const n = this.arr.length;

    // 从最后一个非叶子节点开始，每次往前走一个节点进行判断
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    };
  }

  /**
   * 入栈（堆尾入）
   */
  push(v: number) {
    this.arr.push(v);

    let i = this.arr.length - 1;
    let parentIndex = Math.floor((i / 2) - 1);

    while (this.arr[i] > this.arr[parentIndex]) {
      this.swap(i, parentIndex);

      i = parentIndex;
      parentIndex = Math.floor((i / 2) - 1);
    }
  }

  /**
   * 出栈（堆头出）
   */
  pop() {
    const n = this.arr.length;
    const head = this.arr[0];
    const tail = this.arr[n - 1];

    // 将尾元素覆盖头元素，删除尾元素
    this.arr[0] = tail;
    this.arr.pop();

    let i = 0;
    // 左右子节点下标
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    // 右节点下标要小于数组长度
    while (r < n) {
      // 当前节点只和最大的子节点交换即可，将最大的值放到中间节点，子节点肯定都比它小，不然交换之后还得检查另一个子节点，少一步
      const maxIndex = this.arr[l] > this.arr[r] ? l : r;

      // 交换
      if (this.arr[i] < this.arr[maxIndex]) {
        this.swap(i, maxIndex);
      }

      // 继续向下检查&交换
      i = maxIndex;
      l = i * 2 + 1;
      r = i * 2 + 2;
    }

    return head;
  }
}

// const arr = [3, 7, 16, 10, 21, 22, 23];
// const h = new Heap(arr);
// console.log(h.arr);
// h.pop();
// console.log(h.arr);
// h.push(20);
// console.log(h.arr);

export { }
