/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  candidates = candidates.sort();

  const backtrack = (path: number[], start: number, total: number = 0) => {
    // 累计结果大于 targat, 没必要继续递归了，直接返回
    if (total > target) {
      return;
    }

    if (total === target) {
      res.push(path.slice());
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      path.push(candidates[i]);

      backtrack(path, i + 1, total + candidates[i]);

      path.pop();
    }
  }

  backtrack([], 0, 0);

  return res;
};
// @lc code=end

