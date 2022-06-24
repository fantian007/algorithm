/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const res = [];
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);

  // 提取 2sum 公共方法
  const twoSum = (nums: number[], start: number, target: number) => {
    
    const ret: number[][] =[];
    let lo = start;
    let hi = nums.length - 1;

    while (lo < hi) {
      const sum = nums[lo] + nums[hi];
      let left = nums[lo];
      let right = nums[hi];

      if (sum < target) {
        while (lo < hi && left === nums[lo]) {
          lo++;
        }
      } else if (sum > target) {
        while (lo < hi && right === nums[hi]) {
          hi--;
        }
      } else {
        ret.push([nums[lo], nums[hi]]);

        while (lo < hi && left === nums[lo]) {
          lo++;
        }
        while (lo < hi && right === nums[hi]) {
          hi--;
        }
      }
    }

    return ret;
  }

  for(let i = 0; i < n; i++) {
    const r = twoSum(nums, i + 1, 0 - nums[i]);

    for(let j = 0; j < r.length; j++) {
      res.push([nums[i], ...r[j]]);
    };

    // 排除第一个元素重复的情况
    while (i < n -1 && nums[i] === nums[i + 1]) {
      i++;
    }
  };

  return res;
};
// @lc code=end

