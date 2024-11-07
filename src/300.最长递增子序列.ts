// 动规 = 穷举 + 备忘录（dp)
function lengthOfLIS(nums: number[]): number {
  // dp 最后一个数不一定是最大值，用 r 来记录最大值
  let r = 1;

  // [0-i] 之间以某个数开头，以 i 结尾的数组，的最长递增子序列的长度 为 dp[i]
  const dp: number[] = new Array(nums.length).fill(1);

  dp[0] = 1;

  // 穷举（以 i 结尾）
  for (let i = 1; i < nums.length; i++) {
    // 以 j 开头的数，到 i 之间，递增子序列的最大长度
    for (let j = 0; j < i; j++) {
      // 注意：递增元素不要求要连续
      // 是 nums[i] > nums[j]
      // 不是 nums[i] > nums[i - 1]
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    };
    
    // dp 最后一个数对应的不一定是最长的子序列
    // 例如  [..., 9, ...10, 8]，8 对于 10 来说，子序列中会少个 9
    r = Math.max(r, dp[i]);
  };

  return r;
};

// const r = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]); // 4
// const r = lengthOfLIS([0, 1, 0, 3, 2, 3]); // 4
const r = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]); // 6
console.log(r);

export { }

