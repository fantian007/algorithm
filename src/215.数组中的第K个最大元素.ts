/**
 * 要求 O(nlogn) 的算法
 * 
 * 思路：
 * 假设快速排序基准点索引是 j，那么左边的数都小于 nums[j], 右边数都大于 nums[j]
 * 不用管左边、右边子数组是否已经排好序，只要保证左边数小，右边数大，那么当前 nums[j] 就是 第 j+1 个大的元素
 * 同理，求第 K 个最大元素，只要某一次排序，选好基准点，排序之后，基准点在数组中的位置可能会移动，但只要移动后的下标是 n-k(从升序数组末尾倒推)，那么该位置值就是第 K 大元素
 */
// todo 没太理解
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;

  const quickSelect = (left: number, right: number, k: number) => {
    if (left === right) {
      return nums[k];
    }

    const mid = nums[left];
    let i = left - 1;
    let j = right + 1;

    while (i < j) {
      do i++; while (nums[i] < mid);
      do j--; while (nums[j] > mid);

      // 走到这，i 停留在比 mid 大的数上，j 停留在比 mid 小的数上
      // 小的数要放前面，大的数要放后面，所以需要交换数值
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }

    if (j >= k) {
      // 左区间
      return quickSelect(left, j, k);
    } else {
      // 右区间
      return quickSelect(j + 1, right, k);
    }
  }

  return quickSelect(0, n - 1, n - k);
};

const r = findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5
console.log(r);

export { }
