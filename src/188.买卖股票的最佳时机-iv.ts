function maxProfit(k: number, prices: number[]): number {
  const len = prices.length;

  if (len <= 0) {
    return 0;
  }

  /**
   * 买入/卖出 如果是在同一天，利润是0，那么没有意义。有意义：至少每笔交易占用2天时间，所以最多交易笔数是 len / 2,（注意：次数 = 笔数 * 2）
   * 如果 k > len / 2, 结果是一样的
   */
  if (k > (len / 2)) {
    // 降低交易笔数
    return maxProfit(Math.floor(len / 2), prices);
  }

  // dp[i][j][0]：第 i 天，处于第 j 笔交易，手里有无股票（第 j 笔交易已经完成）
  // dp[i][j][1]：第 i 天，处于第 j 笔交易，手里有有股票（注意：手里有股票，那么处于交易中，卖出才算交易完成）
  // k 代表 第 k 笔交易（从1开始，比较语义化），所以长度是  k+1 （从0开始也行，从 1 开始比较好理解）
  const dp: number[][][] = Array.from({ length: len }, () => Array.from({ length: k + 1 }, () => new Array(2).fill(0)));

  for(let i = 0; i < len; i++) {
    for(let j = k; j >= 1; j--) {
      // 第一天(一天之内，无论完成多少笔交易，只要手里无股票，那么利润就是0，有股票，代表买入，是 -prices[0])
      if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];

        continue;
      }

      // 1.今天什么都没干，状态和前一天一样。2. 昨天手里有股票，今天卖出。（使用 k 而不是 k-1：因为手里有股票，所以还处于第k笔交易中）
      dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
      // 1.今天什么都没干，状态和昨天一样。2. 昨天手里没有股票，今天买入了
      dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
    };
  };

  return dp[len-1][k][0];
};

// const r = maxProfit(2, [2, 4, 1]); // 2
const r = maxProfit(12, [3, 2, 6, 5, 0, 3]); // 7
console.log(r);

export { };
