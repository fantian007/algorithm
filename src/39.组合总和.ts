/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const backtrack = (path: number[], start: number, total) => {
    if (total > target) {
      return;
    }

    if (total === target) {
      res.push(path.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      total += candidates[i];

      backtrack(path, i, total);

      path.pop();
      total -= candidates[i];
    }
  }

  backtrack([], 0, 0);

  return res;
};
// @lc code=end

