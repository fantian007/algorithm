// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
function climbing_stairs(m: number, n: number): number {
  // dp[j]: 爬 j 个台阶，有 dp[j] 种方法
  const dp: number[] = new Array(n + 1).fill(0);

  dp[0] = 1;

  // 排列，背包外层循环，物品内层循环
  for (let j = 1; j <= n; j++) {
    for (let i = 0; i <= m; i++) {
      if (j < i) continue;
      dp[j] += dp[j - i];
    }
  }

  return dp[n];
}

// const t = change(5, [1, 2, 5]);
const t = climbing_stairs(2, 3);
console.log(t);

export {};
