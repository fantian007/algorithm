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
  // 定义快速选择函数
  const quickSelect = (left: number, right: number): number => {
    // 选择最右边的元素作为枢轴
    const pivot = nums[right];
    let pivotIndex = left;

    // 遍历左到右-1 的元素，将小于枢轴的元素放到左边
    for (let i = left; i < right; i++) {
      if (nums[i] > pivot) {
        // 交换元素
        [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]];
        pivotIndex++;
      }
    }

    // 将枢轴放到正确的位置
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    // 此时枢轴的索引
    const pivotFinalIndex = pivotIndex;

    // 如果枢轴的索引等于 k - 1，说明找到了第 k 大的元素
    if (pivotFinalIndex === k - 1) {
      return nums[pivotFinalIndex];
    } else if (pivotFinalIndex > k - 1) {
      // 否则在左半部分继续寻找
      return quickSelect(left, pivotFinalIndex - 1);
    } else {
      // 在右半部分继续寻找
      return quickSelect(pivotFinalIndex + 1, right);
    }
  };

  return quickSelect(0, nums.length - 1);
}

const r = findKthLargest([3, 2, 2, 1, 9, 1, 2, 10, 1, 5, 6, 4], 2); // 5
console.log(r);

export { }
