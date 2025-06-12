// @see https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html
function change(amount: number, coins: number[]): number {
  // dp[j]: 凑成总金额 j 的 硬币组合数
  const dp: number[] = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (const coin of coins) {
    for (let j = coin; j <= amount; j++) {
      // 1. 之前 dp[j] 的组合数
      // 2. dp[j - coin] 的组合数（各自再加上1个当前 coin 就可以达到 j）
      // 结果：2者组合数的和
      dp[j] += dp[j - coin];
    }
  }

  return dp[amount];
}


// const r = change(5, [1, 2, 5]);
const r = change(1, [1]);
console.log(r);

export {};
