/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let slow = 0;
  let fast = 0;

  while (fast <= len - 1) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];

      slow++;
    }

    fast++;
  }

  return slow;
};
// @lc code=end

