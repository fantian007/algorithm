/**
 * 直接递归有超时问题
 * 
 * 反向计算，可以大大减少时间，直接避免了重复计算
 */
function rob(nums: number[]): number {
  const len = nums.length;

  const dp = new Array(len + 2).fill(0);

  for(let i = len - 1; i >= 0 ; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  };

  return dp[0];
};

export {}
