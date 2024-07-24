// @see https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html
function change(amount: number, coins: number[]): number {
  // dp[j]: 凑成总金额 j 的 硬币组合数
  const dp: number[] = new Array(amount + 1).fill(0);


  dp[0] = 1;

  for (let i = 0; i <= coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
}

const r = change(5, [1, 2, 5]);
console.log(r);

export {};
