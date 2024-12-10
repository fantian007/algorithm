function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return 1;
  }

  let target = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[target]) {
      continue;
    } else {
      target++;

      nums[target] = nums[i];
    }
  };

  return target + 1;
};
