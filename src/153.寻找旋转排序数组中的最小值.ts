/**
 * @see https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/698479/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/?envType=study-plan-v2&envId=top-interview-150
 */
function findMin(nums: number[]): number {
  const len = nums.length;

  let left = 0, right = len - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      // mid 位置不可能是最小值，因为 nums[right] 更小
      left = mid + 1;
    }
  }

  // 遍历结束，left 就是最小值
  return nums[left];
};

const r = findMin([3, 4, 5, 1, 2]); // 1
console.log(r);

export { }
