function wiggleMaxLength(nums: number[]): number {
  const len = nums.length;
  const dp = new Array(len).fill(0).map((_) => new Array(2).fill(0));

  //   第一个数作为波峰
  dp[0][0] = 1;
  //   第一个数作为波谷
  dp[0][1] = 1;

  for (let i = 1; i < nums.length; i++) {
    // 波峰、波谷 数量是累加的，所以至少为1（初始值就已经是1）
    dp[i][0] = dp[i][1] = 1;

    // 双层循环，效率不高
    for (let j = 0; j < i; j++) {
      // 当前值是波峰
      if (nums[i] > nums[j]) {
        // 如果前面是平波，那么还是 dp[i][0]
        // 如果前面是波谷，那么就是 波谷 + 1
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      }
      // 同上
      else if (nums[i] < nums[j]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      }
    }
  }

  // 累加的，所以取最后一个最大的波峰/波谷 即可
  return Math.max(dp[len - 1][0], dp[len - 1][1]);
}

const r = wiggleMaxLength([1, 7, 4, 9, 2, 5]);
// const r = wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]);
console.log(r);

export {};
