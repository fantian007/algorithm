function findLengthOfLCIS(nums: number[]): number {
  let r = 1;

  // dp[i]: 到第 i 位时，最长连续递增子序列的长度
  const dp: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }

    r = Math.max(r, dp[i]);
  };

  return r;
};

// const r = findLengthOfLCIS([1, 3, 5, 4, 7]); // 3
// const r = findLengthOfLCIS([2, 2, 2, 2, 2]); // 1
const r = findLengthOfLCIS([2]); // 1
console.log(r);

export { }

