/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const t = nums[mid];

    if (t === target) {
      return mid;
    }

    if (t < target) {
      left = mid + 1;
    }

    if (t > target) {
      right = mid - 1;
    }
  }

  return -1;
};
// @lc code=end

