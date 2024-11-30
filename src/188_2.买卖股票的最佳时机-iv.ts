// @see https://programmercarl.com/0188.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIV.html#%E6%80%9D%E8%B7%AF
function maxProfit(k: number, prices: number[]): number {
  /**
   * dp[i][j]: 第i天的状态为 j（一开始几天可能什么都不干，后续有了交易之后，状态可能处于第n次买入，可能处于第n次卖出）。所以 j 的状态有 2 * k + 1 种
   *  1. 什么都不干
   *  2. 第1次买入
   *  3. 第1次卖出
   *  4. 第2次买入
   *  5. 第2次卖出
   *  6. ...
   * 
   * dp数组中，下标奇数是买入，偶数是卖出
   */
  const dp: number[][] = new Array(prices.length).fill(0).map(_ => new Array(2 * k + 1).fill(0));

  // 第一天频繁的买入/卖出，只有买入的时候（奇数）是 -prices[0]，其它情况都是 0
  for (let j = 1; j < dp[0].length; j += 2) {
    dp[0][j] = -prices[0];
  };

  // 第 i 天
  for (let i = 1; i < prices.length; i++) {
    // 还什么都没干
    dp[i][0] = 0;
    // 处于第一次买入状态（1. 之前就买入了1次。 2.今天买入）
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);

    for (let j = 2; j < 2 * k + 1; j++) {
      // 处于 第j次 买入状态
      if (j % 2 === 1) {
        // 1. 之前就买入了；2. 之前的卖出状态 + 今天买入
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
      }
      // 处于 第j次 卖出状态
      else {
        // 1. 之前就卖出了；2. 之前的买入状态 + 今天卖出
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]);
      }
    };
  };

  return dp[prices.length - 1][2 * k];
};

// const r = maxProfit(2, [2, 4, 1]); // 2
const r = maxProfit(12, [3, 2, 6, 5, 0, 3]); // 7
console.log(r);

export { };

