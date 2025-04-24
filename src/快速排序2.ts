// 快速排序 中的 选择排序 （原地交换元素）
// 思路：类似快慢指针，将符合条件的2个元素交换位置，让大于/小于的2堆元素分类放在一起
const quickSort = (nums: number[], left: number, right: number): number[] => {
  if (left >= right) return;

  // 轴（数组两个端点之一，固定不动，不参与交换）
  let pivot = right;
  // 交换位置（轴的相反端点）
  let pos = left;

  // 遍历位置（交换起始位置开始）
  for (let i = pos; i < right; i++) {
    // 不同的遍历方向，大于/小于 也不一样，不一定 < 就是小的数排前面
    if (nums[i] < nums[pivot]) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
      pos++;
    }
  }

  // [小于轴的元素, (pos)大于轴的元素, 轴（大)]
  // 所以轴位置元素需要交换一次
  [nums[pivot], nums[pos]] = [nums[pos], nums[pivot]];

  // 以轴为中心，分为2组，但是各自组内还是无序，需要递归处理
  quickSort(nums, left, pos - 1);
  quickSort(nums, pos + 1, right);

  return nums;
};

const arr = [5, 7, 2, 3, 8, 4];
const r = quickSort(arr, 0, arr.length - 1);
console.log(r);

export { }
