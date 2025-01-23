function threeSum(nums: number[]): number[][] {
  const res = [];
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);

  // 提取 2sum 公共方法
  const twoSum = (nums: number[], start: number, target: number) => {

    const ret: number[][] = [];
    let lo = start;
    let hi = nums.length - 1;

    while (lo < hi) {
      const sum = nums[lo] + nums[hi];
      let left = nums[lo];
      let right = nums[hi];

      if (sum < target) {
        lo++;
      } else if (sum > target) {
        hi--;
      } else {
        ret.push([nums[lo], nums[hi]]);

        // 相同的元素跳过
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

  // 遍历数组，选出一个数作为第一个数
  for (let i = 0; i < n; i++) {
    // 排序之后，当前项 >0，那么后面的数都大于 0，不用看了
    if (nums[i] > 0) {
      break;
    }

    // 连续相同的数，取第一个，其它的跳过
    // 如果当前的数和上一个数相同（上一个数已 push)，那么跳过当前数
    // while (i > 0 && nums[i] === nums[i - 1]) {
    //   i++;
    // }

    // 从 (i, len) 从找 其余 2 个数
    const r = twoSum(nums, i + 1, 0 - nums[i]);

    for (let j = 0; j < r.length; j++) {
      res.push([nums[i], ...r[j]]);
    };

    // 连续相同的数，取第一个，其它的跳过
    // 如果下一个数和当前数相同（当前数已 push)，那么跳过下一个数
    while (i < n - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  };

  return res;
};

/**
 * 连续相同的数，一定要取第一个，例如：[-4, -1, -1, 0, 1, 2]
 * 取第一个 -1：剩余2数组合 [[-1, 2], [0, 1]]
 * 取第二个 -1: 剩余2数组合：[[0, 1]]，是第一个数的子集
 * 取第一个数，能获取到所有组合；取后面的数，组合数减少，且子集组合是重复的，所以需要跳过
 */

// const r = threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]
// const r = threeSum([-3, -3, 0, 1, 2, 3, 6]); // [[-3,-3,6],[-3,0,3],[-3,1,2]]
// const r = threeSum([-2, 0, 0, 2, 2]); // [[-2,0,2],[-2,0,2]]
const r = threeSum([1, -1, -1, 0]); // [[-1,0,1]]

console.log(JSON.stringify(r));

export { };
