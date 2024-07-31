function maxProfit(prices: number[]): number {
  // 第 i 天的几个状态:
  // 1. 持有股票
  // 2. 不持有股票-非冷冻期（注意：当天非冷冻期，昨天不能卖出，所以需要有个状态记录昨天是否卖出），状态改为： 不持有股票-非冷冻期-当日无卖出
  // 3. 不持有股票-非冷冻期-当日有卖出
  // 4. 不持有股票-冷冻期
  const dp: number[][] = new Array(prices.length).fill(0).map(_ => new Array(3).fill(0));

  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;
  dp[0][3] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 持有股票
    dp[i][0] = Math.max(
      /** 昨天持有 */ dp[i - 1][0],
      /** 昨天不持有-非冷冻期-无卖出 + 今天买入 */ dp[i - 1][1] - prices[i],
      /** 昨天不持有-冷冻期 + 今天买入 */ dp[i - 1][3] - prices[i]
    );

    // 不持有-非冷冻期-当日无卖出
    dp[i][1] = Math.max(
      /** 昨天不持有-非冷冻期-无卖出 */
      dp[i - 1][1],
      /** 昨天不持有-非冷冻期-卖出 */
      dp[i - 1][2],
      /** 昨天冷冻期 */
      dp[i - 1][3]
    );

    // 不持有-非冷冻期-当日有卖出
    dp[i][2] = Math.max(
      /** 昨天持有 + 今日卖出 */
      dp[i - 1][0] + prices[i],
      /** 昨天不持有-非冷冻期-无卖出 */
      dp[i - 1][1],
      /** 昨天不持有-非冷冻期-有卖出 */
      dp[i - 1][2],
      /** 昨天冷冻期 */
      dp[i - 1][3]
    );

    // 不持有-冷冻期
    dp[i][3] = Math.max(
      /** 昨天不持有-非冷冻期-卖出 */
      dp[i - 1][2]
    )
  };

  return dp[prices.length - 1][2];
};

// const r = maxProfit([1, 2, 3, 0, 2]); // 3
const r = maxProfit([1]); // 0
console.log(r);

export { }
