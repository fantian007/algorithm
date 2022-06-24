/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const backtrack = (path: number[], start: number) => {
    res.push(path.slice());

    for (let i = start; i < nums.length; i++) {
      const n = nums[i];

      path.push(n);

      backtrack(path, i + 1);

      path.pop();
    }
  }

  backtrack([], 0);

  return res;
};
// @lc code=end

