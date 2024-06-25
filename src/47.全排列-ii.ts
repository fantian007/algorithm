/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  // 排序
  nums = nums.sort();

  const backtrack = (path: number[], used: boolean[]) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 相同位置使用过的元素不再使用
      if (used[i] === true) {
        continue;
      }

      // 剪枝，保证相同元素的相对位置不变
      // used[i - 1] = false,代表同一树层的前一个节点使用过，跳过
      // nums[i] === nums[i - 1] 代表同一树层上，当前节点和前一个节点值相同
      // 总结：如果同一树层，当前节点和前一个节点值相同，并且前一个节点的值使用过了，那么跳过
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], new Array(nums.length).fill(false));

  return res;
};
// @lc code=end

