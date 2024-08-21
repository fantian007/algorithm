// 其实就是求 最长公共子序列（求相同点，且点之间的顺序不能变）
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  // dp[i][j]: num1 截取 i-1, num2 截取 j-1， 这2段的最长公共子序列
  const dp = new Array(nums1.length + 1).fill(0).map(_ => new Array(nums2.length + 1).fill(0));

  dp[0][0] = 0;

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    };
  };

  return dp[nums1.length][nums2.length];
};

const r = maxUncrossedLines([1, 4, 2], [1, 2, 4]);
console.log(r);

export { }

