/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * 将 15 题三数只之和方法提取出来，再用相同的方法求四数之和
 * 
 * 可以看到有点过程是重复的，其实可以提取出来，就可以递归调用求 任意 sum 问题
 */
function fourSum(nums: number[], target: number): number[][] {
  // n数之和
  function nSum(nums: number[], n: number, start: number, target: number): number[][] {
    const res = [];
    const sz = nums.length;
    nums = nums.sort((a, b) => a - b);

    if (n < 2 || sz < n) {
      return res;
    }

    else if (n === 2) {
      let lo = start;
      let hi = sz - 1;
  
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
          res.push([nums[lo], nums[hi]]);
  
          while (lo < hi && left === nums[lo]) {
            lo++;
          }
          while (lo < hi && right === nums[hi]) {
            hi--;
          }
        }
      }
    }

    else {
      for(let i = start; i < sz; i++) {
        const r = nSum(nums, n - 1, i + 1, target /** 这里改为 target **/ - nums[i]);
    
        for(let j = 0; j < r.length; j++) {
          res.push([nums[i], ...r[j]]);
        };
    
        // 排除第一个元素重复的情况
        while (i < sz - 1 && nums[i] === nums[i + 1]) {
          i++;
        }
      };
    }
  
    return res;
  };

  // 四数之和
  //  双指针、数组必须先排序
  nums.sort((a, b) => a - b);

  return nSum(nums, 4, 0, target);
};
// @lc code=end

