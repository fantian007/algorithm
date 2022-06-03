/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  let findIndex = undefined;

  while (findIndex === undefined && left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const t = nums[mid];

    if (t === target) {
      findIndex = mid;
    }

    if (t > target) {
      right = mid - 1;
    }

    if (t < target) {
      left = mid + 1;
    }
  }

  if (findIndex === undefined) {
    return [-1, -1];
  } else {
    left = findIndex;
    right = findIndex;

    while (nums[left] === target) {
      left -= 1;
    }

    while (nums[right] === target) {
      right += 1;
    }

    return [left + 1, right - 1];
  }
};
// @lc code=end

