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
  // 三数之和
  function threeSum(nums: number[], start: number, target: number): number[][] {
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
  
    for(let i = start; i < n; i++) {
      const r = twoSum(nums, i + 1, target /** 这里改为 target **/ - nums[i]);
  
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

  // 四数之和
  const res: number[][] = [];
  const n = nums.length;
  //  双指针、数组必须先排序
  nums.sort((a, b) => a - b);

  for(let i = 0; i < n; i++) {
    const r = threeSum(nums, i + 1, target - nums[i]);

    for(let j = 0; j < r.length; j++) {
      res.push([nums[i], ...r[j]]);
    };

    while(i < n - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  };

  return res;
};
// @lc code=end

