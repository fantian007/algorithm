/**
 * 自顶向下（递归）
 * 
 * @see https://leetcode.cn/problems/coin-change/solutions/6568/dong-tai-gui-hua-tao-lu-xiang-jie-by-wei-lai-bu-ke/?envType=study-plan-v2&envId=top-interview-150
 */
function coinChange(coins: number[], amount: number): number {
  // 递归会存在重复计算，通过备忘录解决
  const memo = {};

  // 入参：金额，出参：凑够金额所需的最少硬币数
  const dp = (n: number) => {
    // 去备忘录查
    if (n in memo) return memo[n];

    // 边界条件
    if (n === 0) return 0;
    if (n < 0) return -1;

    // 求最小值，所以初始化为最大值
    let r = Infinity;

    // 暴力穷举
    for (const coin of coins) {
      const sub = dp(n - coin);

      // 不能凑够，将下一个硬币纳入考虑
      if (sub === -1) continue;

      // 当前答案 = 子问题最少硬币数 + 1（当前硬币）
      r = Math.min(r, sub + 1);
    };

    // 记录到备忘录
    memo[n] = r;

    return r === Infinity ? -1 : r;
  }

  return dp(amount);
}

// const r = coinChange([1, 2, 5], 11);
const r = coinChange([2, 1], 3);
console.log(r);

export { };
