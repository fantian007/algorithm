function threeSum(nums: number[]): number[][] {
  // 排序，方便 去重 + 剪枝
  nums.sort((a, b) => a - b);

  const r: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    // 剪枝
    if (nums[i] > 0) {
      return r;
    }

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        r.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // 去重
        while (nums[left] === nums[left - 1]) {
          left++;
        }

        // 去重
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  };

  return r;
}


/**
 * 几处去重的逻辑：
 * 连续相同的数，一定要取第一个，例如：[-4, -1, -1, 0, 1, 2]
 * 取第一个 -1：剩余2数组合 [[-1, 2], [0, 1]]
 * 取第二个 -1: 剩余2数组合：[[0, 1]]，是第一个数的子集
 * 取第一个数，能获取到所有组合；取后面的数，组合数减少，且子集组合是重复的，所以需要跳过
 */

// const r = threeSum([-1, 0, 1, 2, -1, -4]);
const r = threeSum([-3, -3, 0, 1, 2, 3, 6]);

console.log(JSON.stringify(r));

export {};
