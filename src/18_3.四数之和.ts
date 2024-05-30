function fourSum(nums: number[], target: number): number[][] {
  const ret: number[][] = [];

  nums.sort((a, b) => a - b);

  const len = nums.length;
  let left = 1;
  let right = len - 1;

  // 相对于三数之和，多一层循环，已 i,j 组合为固定点
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < len - 2; j++) {
      // i,j 是其中一种组合，忽略后面相同的 j
      if ((j - i) > 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      left = j + 1;
      right = len - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          ret.push([nums[i], nums[j], nums[left], nums[right]]);

          left++;
          right--;

          while (nums[left] === nums[left - 1]) {
            left++;
          }

          while (nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return ret;
}

// const r = fourSum([1, 0, -1, 0, -2, 2], 0);
const r = fourSum([2, 2, 2, 2, 2], 8);
console.log(r);

export {};
