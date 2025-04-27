import { createTree } from "./BinaryTree";

/**
 * 大顶堆
 * 自底向上创建
 */
export class Heap {
  constructor(public arr: number[]) {
    const n = this.arr.length;

    // 叶子节点没有子节点，不需要元素交换
    // 从最后一个非叶子节点开始，每次往前走一个节点进行判断
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
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

    let largest = i;
    // 找出当前节点、左子节点和右子节点中的最大值
    // 将最大值交换到父节点的位置，那么左右子节点值都比父节点小
    if (l < n && this.arr[l] > this.arr[largest]) {
      largest = l;
    }
    if (r < n && this.arr[r] > this.arr[largest]) {
      largest = r;
    }

    // 如果最大值不是当前节点，交换并递归调整（注意判断，否则死循环）
    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  /**
   * 入栈（堆尾入）
   */
  push(v: number) {
    this.arr.push(v);

    let i = this.arr.length - 1;
    let parentIndex = Math.floor((i - 1) / 2); // 注意：不是 Math.floor(i / 2) - 1

    while (i > 0 && this.arr[i] > this.arr[parentIndex]) {
      this.swap(i, parentIndex);

      i = parentIndex;
      parentIndex = Math.floor((i - 1) / 2);
    }
  }

  /**
   * 出栈（堆头出）
   */
  pop() {
    if (this.arr.length === 0) return null;

    // 先取再 pop，不能反
    const head = this.arr[0];
    const tail = this.arr.pop();

    // 将尾元素 放到 头元素 位置
    this.arr[0] = tail;
    // 重新整理
    this.heapify(0);

    return head;
  }
}

const arr = [3, 7, 16, 10, 21, 22, 23];
const h = new Heap(arr);
console.log(h.arr);
const tree = createTree(h.arr);
console.log(tree);
h.pop();
console.log(h.arr);
h.push(20);
console.log(h.arr);

export { }
