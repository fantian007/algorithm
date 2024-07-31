function rob(nums: number[]): number {
  // dp[j]: 偷窃 j 家不触发报警获取的最大金额
  const dp: number[] = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // i-2 + 当前, i-1 任选一
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}

const r = rob([1, 2, 3, 1]);
console.log(r);

export {};
