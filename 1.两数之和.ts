/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = new Array(0);
  const used: boolean[] = new Array<boolean>(nums.length).fill(false);

  const p = (nums: number[], track: number[], used: boolean[]) => {
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];

      if (used[i] === true) {
        continue
      }

      track.push(n);
      used[i] = true

      p(nums, track, used);

      track.pop();
      used[i] = false;
    }
  }

  p(nums, [], used);

  return res;
};
// @lc code=end

