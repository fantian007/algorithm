function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return 1;
  }

  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;

      nums[slow] = nums[fast];
    }

    fast++;
  }

  return slow + 1;
};

export {}
