/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let slow = 0;
  let fast = 0;

  while (fast <= n - 1) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];

      slow++;
    }

    fast++;
  }

  while (slow < fast) {
    nums[slow] = 0;

    slow++;
  }
};
// @lc code=end

