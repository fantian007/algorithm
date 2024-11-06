function rob(nums: number[]): number {
  const len = nums.length;

  let dp_i = 0;
  let dp_i1 = 0;
  let dp_i2 = 0;

  for(let i = len - 1; i >= 0 ; i--) {
    dp_i = Math.max(dp_i1, nums[i] + dp_i2);

    dp_i2 = dp_i1;
    dp_i1 = dp_i;
  };

  return dp_i;
};

export {}
