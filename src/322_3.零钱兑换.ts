function coinChange(coins: number[], amount: number): number {
  // dp[i]: 求组合金额 i 的最少硬币数
  const dp: number[] = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  // 从 0-amount 的所有金额 穷举
  for (let i = 0; i < dp.length; i++) {
    // 每个金额的处理步骤如下：
    //  1. 选择其中一个币，那么剩余处理金额是 n - coin
    //  2. n - coin 的金额，递归，再从几种币之中选择一种
    for (const coin of coins) {
      // 需要处理的金额小于0，说明币值比金额大，继续判断下一个币
      if (i - coin < 0) continue;

      // 从几种币种的选择中，取最小值
      // 不一定正好能组合成 i，不能组合的，其实就是 Infinity + 1 还是 Infinity
      dp[i] = Math.min(dp[i], (dp[i - coin]) + 1);
    }
  }

  // 从 o-amount 计算过程中，有的被 continue 了/无法正好组合成目标值，会有 Infinity 残留，需要判断一下
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// const r = coinChange([1, 2, 5], 11);
const r = coinChange([2, 4, 2], 3);
console.log(r);

export { };
