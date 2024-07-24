function climbStairs(n: number): number {
  // dp[i] 表示 i 阶梯处， 有 n 种方法到达
  const dp: number[] = [];

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

const r = climbStairs(3);
console.log(r);

export {};
