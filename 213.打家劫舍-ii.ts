/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  const n = nums.length;

  if (n <= 1) {
    return nums[0];
  }

  const p = (start: number, end: number) => {
    let dp_i = 0;
    let dp_i1 = 0;
    let dp_i2 = 0;
  
    for (let i = end; i >= start; i--) {
      dp_i = Math.max(dp_i1, nums[i] + dp_i2);
  
      dp_i2 = dp_i1;
      dp_i1 = dp_i;
    }

    return dp_i;
  }

  const s = Math.max(
    p(0, n - 2),
    p(1, n - 1)
  );

  return s;
};
// @lc code=end

