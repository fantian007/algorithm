function lengthOfLIS(nums: number[]): number {
  // dp 最后一个数不一定是最大值，用 r 来记录最大值
  let r = 1;

  // 第 i 位数字组成的最长递增子序列的长度 为 dp[i]
  const dp: number[] = new Array(nums.length).fill(1);

  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    };
    
    r = Math.max(r, dp[i]);
  };

  return r;
};

// const r = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]); // 4
// const r = lengthOfLIS([0, 1, 0, 3, 2, 3]); // 4
const r = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]); // 6
console.log(r);

export { }

