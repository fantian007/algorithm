function rob(nums: number[]): number {
  const len = nums.length;

  if (len === 1) return nums[0];

  // dp[i][0]：不偷第i家；dp[i][1]：偷第i家
  const dp: number[][] = new Array(len).fill(0).map(_ => new Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = nums[0];

  for (let i = 1; i < len; i++) {
    // 不偷（前一家可以偷，可以不偷，取最大值）
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    // 偷（前一家不偷 + 今家）
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  // 取 【偷，不偷】的最大值
  return Math.max(dp[len - 1][1], dp[len - 1][0]);
}
const r = rob([0]);
// const r = rob([1, 2, 3, 1]);
console.log(r);

export { };
