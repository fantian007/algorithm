// 快速排序 中的 选择排序 （原地交换元素）
// 思路：类似快慢指针，将符合条件的2个元素交换位置，让大于/小于的2堆元素分类放在一起
const quickSort = (nums: number[], left: number, right: number): number[] => {
  if (left >= right) return nums;

  // 轴
  let pivot = right;
  // 交换位置
  let pos = left;

  // 遍历位置
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
      pos++;
    }
  }

  // [小于轴的元素, (pos)大于轴的元素, 轴（大)]
  // 所以轴位置元素需要交换一次
  [nums[pivot], nums[pos]] = [nums[pos], nums[pivot]];

  // 以轴为中心，分为2组，但是组各自内还是无序，需要递归处理
  quickSort(nums, left, pos - 1);
  quickSort(nums, pos + 1, right);

  return nums;
};

const arr = [5, 7, 2, 3, 8, 4];
const r = quickSort(arr, 0, arr.length - 1);
console.log(r);

export { }
