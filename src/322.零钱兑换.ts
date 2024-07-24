function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// const r = coinChange([1, 2, 5], 11);
const r = coinChange([2], 3);
console.log(r);

export {};
