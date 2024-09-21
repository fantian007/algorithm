/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res = [];

  const p = (track: number[], used: boolean[]) => {
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];

      if (used[i]) {
        continue;
      }

      track.push(n);
      used[i] = true;

      p(track, used);

      track.pop();
      used[i] = false;
    }
  }

  p([], []);

  return res;
};
// @lc code=end


export {}
