function threeSum(nums: number[]): number[][] {
  const ret: number[][] = [];

  nums.sort((a, b) => a - b);
  const len = nums.length;

  let left = 0;
  let right = len - 1;

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return ret;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    left = i + 1;
    right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ret.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        while (nums[right] === nums[right + 1]) {
          right--;
        }
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ret;
}

// const r = threeSum([-1, 0, 1, 2, -1, -4]);
const r = threeSum([-3, -3, 0, 1, 2, 3, 6]);

console.log(r);

export {};
