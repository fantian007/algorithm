/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];

  // 排序，让相同元素挨一起
  nums = nums.sort();

  const backtrack = (path: number[], start: number) => {
    res.push(path.slice());

    for (let i = start; i < nums.length; i++) {
      const n = nums[i];

      /**
       * i 要 > start, 保证 i - 1 有效
       * 相邻分支，如果值相同，跳过
       */
      if (i > start && n === nums[i - 1]) {
        continue;
      }

      path.push(n);

      backtrack(path, i + 1);
    
      path.pop();
    }
  }

  backtrack([], 0);

  return res;
};
// @lc code=end

