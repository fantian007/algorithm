// 动规
function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (const coin of coins) {
    for (let j = coin; j <= amount; j++) {
      if (j - coin < 0) continue;

      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// const r = coinChange([1, 2, 5], 11);
const r = coinChange([2, 1], 3);
console.log(r);

export { };
