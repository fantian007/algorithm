/**
 * 要求 O(nlogn) 的算法
 * 
 * 思路：
 * 假设快速排序基准点索引是 j，那么左边的数都小于 nums[j], 右边数都大于 nums[j]
 * 不用管 左/右数组的元素 是否已经完全排好序，只要保证左边数小，右边数大，那么当前 nums[j] 就是 第 j+1 个大的元素
 * 同理，求第 K 个最大元素，只要某一次排序，选好基准点，排序之后，基准点在数组中的位置可能会移动，但只要移动后的下标是 n-k(从升序数组末尾倒推)，那么该位置值就是第 K 大元素
 * 
 * 官方题解非标准的快速排序，不好理解
 * @see https://leetcode.cn/problems/kth-largest-element-in-an-array/solutions/307351/shu-zu-zhong-de-di-kge-zui-da-yuan-su-by-leetcod-2/?envType=study-plan-v2&envId=top-interview-150
 */
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;

  const quickSelect = (left: number, right: number, k: number) => {
    if (left === right) {
      return nums[k];
    }

    // 快排主元
    const mid = nums[left];
    let i = left - 1;
    let j = right + 1;

    while (i < j) {
      // i 每次停留在 >= mid 元素位置
      do i++; while (nums[i] < mid);
      // j 每次停留在 <= mid 元素位置
      do j--; while (nums[j] > mid);

      // 交换元素（可能会将主元交换到其它地方）
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

const r = findKthLargest([3, 2, 2, 1, 9, 1, 2, 10, 1, 5, 6, 4], 2); // 9
console.log(r);

export { }
