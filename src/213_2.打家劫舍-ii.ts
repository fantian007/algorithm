function range(nums: number[], start: number, end: number) {
  if (start === end) return nums[start];

  const dp: number[] = [];

  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[end];
}

function rob(nums: number[]): number {
  const len = nums.length;

  if (len === 0) return 0;
  if (len === 1) return nums[0];

  // 首尾只能偷一个，所以将 nums 分为2段，[0, len - 2] 和 [1, len - 1]，取最大值
  // 偷窃总是隔一家偷一家，不会出现隔好几家偷一家，虽然连成了环，只需要考虑首尾不要连着偷，不会出现套圈现象
  return Math.max(range(nums, 0, len - 2), range(nums, 1, len - 1));
}

// const r = rob([2, 3, 2]); // 3
// const r = rob([1, 2, 3, 1]); // 4
// const r = rob([1, 2, 3]); // 3
const r = rob([1, 20, 30, 9, 1, 4]); // 3
console.log(r);

export {};
