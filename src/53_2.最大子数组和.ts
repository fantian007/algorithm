function maxSubArray(nums: number[]): number {
  let r = nums[0];

  // dp[i]： [0, i] 区间最大和
  const dp: number[] = new Array(nums.length).fill(0);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 1. 通过 dp[i-1] + nums[i]
    // 2. 放弃之前的，重新计算，使用 nums[i]
    // 3. 能不能将 dp[i-1] 也加入 max 选择？例如：dp[i] = Math.max(dp[i-1], dp[i - 1] + nums[i], nums[i]);
    // 不能，这样子数组就不连续了，必须对当前值进行操作，要么加（子数组延长），要么只保留当前值（新子数组起点）
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

    r = Math.max(r, dp[i]);
  };

  return r;
}

const r = maxSubArray([-2, 1, -3]); // 1
// const r = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
// const r = maxSubArray([1]); // 1
// const r = maxSubArray([5, 4, -1, 7, 8]); // 23
console.log(r);

export { }
