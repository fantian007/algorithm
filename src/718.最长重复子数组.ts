function findLength(nums1: number[], nums2: number[]): number {
  let r = 0;

  // dp[i][j]: nums1 截取 [0, i-1], num2 截取 [0, j-1] ，2个数组的最长重复子数组长度
  const dp: number[][] = new Array(nums1.length + 1).fill(0).map(_ => new Array(nums2.length + 1).fill(0));

  dp[0][0] = 0;

  // 注意是 小于等于 length
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }

      r = Math.max(r, dp[i][j]);
    };

  };

  return r;
};

// const r = findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]); // 3
const r = findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]); // 5
console.log(r);

export { };

