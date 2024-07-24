function minCostClimbingStairs(cost: number[]): number {
  // dp[i]：爬 i 层花费的最低体力值
  const dp: number[] = new Array(cost.length).fill(0);

  // 可以从 0/1 层开始爬，消耗 0
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= cost.length; i++) {
    // 爬到当前层，可以从 i-1 层 或者 i-2 层开始爬，消耗对应的体力值
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  // 楼顶，要比最后下标多 1 步
  return dp[cost.length];
}

const r = minCostClimbingStairs([10, 15, 20]);
console.log(r);

export {};
