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
  const quickSort = (left: number, right: number) => {
    // 轴，固定不动，不参与交换
    let pivot = right;
    // 交换位置
    let pos = left;

    for (let i = left; i < right; i++) {
      if (nums[i] > nums[pivot]) {
        [nums[i], nums[pos]] = [nums[pos], nums[i]];
        pos++;
      }
    }

    // 轴位置值交换
    [nums[pos], nums[pivot]] = [nums[pivot], nums[pos]];

    // 相等，直接返回
    if (pos === k - 1) {
      return nums[pos];
    }
    // k-1 元素在 pos 左边，查找左边
    else if (pos > k - 1) {
      return quickSort(left, pos - 1);
    }
    // 查找右边
    else {
      return quickSort(pos + 1, right);
    }
  }

  return quickSort(0, nums.length - 1);
};

const r = findKthLargest([3, 2, 2, 1, 9, 1, 2, 10, 1, 5, 6, 4], 2); // 5
console.log(r);

export { }
