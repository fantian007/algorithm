/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * 状态 -》做选择 -》新的状态
 * 
 * dp 存储状态
 * 状态转移方程代表做了什么选择，转变成新状态
 * 
 * k 代表截止到 i 天，允许交易的最大次数
 * 假设今天允许交易的最大次数是5，并且今天要进行交易，那么截止到昨天，允许交易的最大次数是4
 * 注意这里【允许交易次数】的概念，和题目中的改变是不一样的
 * 题目中的意思是昨天交易了1次，那么今天允许交易的次数就少1次，是差值
 * 这里的意思是从第1天到今天，允许交易的次数不超过 k 次，是累计值
 * 假设最大交易次数5次，那么从第1天到今天，累计最大的允许的交易次数就是5，如果今天有一次交易，那么倒推，昨天累计最大的允许交易次数必须是4
 */
function maxProfit(prices: number[]): number {
  const len = prices.length;
  const max_k = 2;

  /**
   * 三维数组
   * 为什么 max_k + 1 ? 因为 k 代表交易次数，从1开始，而数组从 0 开始，所以多创建一个数组元素，0 位置的元素废弃不用，索引 1 位置的元素代表 k=1, 2 位置的元素代表 k=2
   */
  const dp: number[][][] = Array.from({ length: len }, () => Array.from({ length: max_k + 1 }, () => new Array(2).fill(0)));

  for(let i = 0; i < len; i++) {
    for(let k = max_k; k >= 1; k--) {
      if (i - 1 === -1) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];

        continue;
      }

      dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
      // 买入之前，需要检查&限制昨天的最大交易次数，卖出的时候不用
      dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k - 1][0] - prices[i]);
    };
  };

  return dp[len-1][max_k][0];
};
// @lc code=end

