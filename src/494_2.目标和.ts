// 将表达式拆分为 加法部分 x 和 减法部分 y，
// x - y = target
// x + y = sum
// x = (sum + target) / 2
// 转为0-1背包问题：装满容量为 x 的背包有几种方法（注意是装满，不是最大能装多少），其实就是求子集组合
// @see https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html#%E6%80%9D%E8%B7%AF
function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  const bagSize = (sum + target) / 2;

  // 如果 bagSize 算出来小数，说明 (sum + target) 是奇数，代表给的整数无法正好装满
  if ((sum + target) % 2 === 1) return 0;
  // 如果背包容量小于 0，不合法
  if (bagSize < 0) return 0;

  // dp[j]：容量为 j 的背包，有 d[j] 种装满的方法
  const dp = new Array(bagSize + 1).fill(0);

  // 举例：容量为5的背包
  // 如果装了一个 1，那么还需要装 4，有 dp[4] 种方法
  // 如果装了一个 2，那么还需要装 3，有 dp[3] 种方法
  // 如果装了一个 3，那么还需要装 2，有 dp[2] 种方法
  // 如果装了一个 4，那么还需要装 1，有 dp[1] 种方法
  // 如果装了一个 5，那么还需要装 0，有 dp[0] 种方法
  // 总方法数：dp[4] + dp[3] + dp[2] + dp[1] + dp[0] 种

  // dp[0] 相当于直接装了 和 bagSize 相等的数，算 1 种方法
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    // 滚动数组，内层循环要倒序
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[bagSize];
}

// const r = findTargetSumWays([1, 1, 1, 1, 1], 3);
// const r = findTargetSumWays([1, 0], 1);
// const r = findTargetSumWays([1], 2);
const r = findTargetSumWays([100], -200);
// const r = findTargetSumWays([1], 1);
console.log(r);

export {};
