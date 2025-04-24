/**
 * 归并排序（拆分 + 合并）
 * 1. 递归拆分数组，最终拆分为1个数为一堆
 * 2. 再合并数组，需要一个临时数组来记录合并结果，2个数组合并过程中只需要比较各自的开头元素即可
 * 3. 例如 [1,3]、[2,4] 合并：创建一个临时数组 a=[], 1 和 2 比较，先放入 1；3 和 2 比较，再放入 2；3 和 4 比较，放入 3, 最后放入 4
 * 4. 归并排序利用了合并的子数组都是有序数组，合并时只需要比较各自的头部元素即可
 */
const sort = (nums: number[]) => {
  // 边界，拆分到1个元素时停止
  if (nums.length === 1) return nums;

  // 先随便选个分割点，目的是为了将数组分为 2 组
  // 分 10 组行不行，行！但是 2 组好合并
  const mid = Math.floor(nums.length / 2);

  // 拆
  const left = sort(nums.slice(0, mid));
  const right = sort(nums.slice(mid));

  // 合（合并 left + right)

  // 临时数组，存放合并结果
  const temp: number[] = [];
  // left 数组索引
  let i = 0;
  // right 数组索引
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      temp.push(left[i]);
      i++;
    } else {
      temp.push(right[j]);
      j++;
    }
  }

  // 检查 left 是否遍历完毕
  while (i < left.length) {
    temp.push(left[i++]);
  }

  // 检查 right 是否遍历完毕
  while (j < right.length) {
    temp.push(right[j++]);
  }

  return temp;
}

const arr = [1, 3, 2, 4];
console.log(sort(arr));

export { }
