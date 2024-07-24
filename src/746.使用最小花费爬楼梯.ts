function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = [];

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]);

    if (i !== cost.length) {
      dp[i] += cost[i];
    }
  }

  return dp[cost.length];
}

// const r = minCostClimbingStairs([10, 15, 20]);
const r = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(r);

export {};
