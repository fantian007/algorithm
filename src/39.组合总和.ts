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

      // 防止重复结果，使用 start
      // 元素支持重复取，传 i; 不支持重复取，传 i + 1
      backtrack(path, i, total);

      path.pop();
      total -= candidates[i];
    }
  }

  backtrack([], 0, 0);

  return res;
};
// @lc code=end

