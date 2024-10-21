// 二分法
function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + ((right - left) / 2));

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      // 相等直接返回
      return mid;
    }
  }

  /**
   * 能走到这，说明 left > right，大小关系：[right, target, left]，结果：right + 1
   */
  return right + 1;
};

const r = searchInsert([1, 3, 5, 6], 4); // 2
console.log(r);

export { };
