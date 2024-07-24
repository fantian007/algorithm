/**
 * 不列出所有排列场景，通过关系来演算结果
 * 
 * 1. 求排列，先遍历背包，再遍历物品
 * 2. 有几种方式？递推公式：dp[j] += dp[j-nums[i]]
 * 3. 初始值 dp[j] = 1
 */
function combinationSum4(nums: number[], target: number): number {
  // dp[j]：和等于 j 的排列数
  const dp: number[] = new Array(target + 1).fill(0);

  dp[0] = 1;

  // 举例：容量为5的背包
  // 如果装了一个 1，那么还需要装 4，有 dp[4] 种方法
  // 如果装了一个 2，那么还需要装 3，有 dp[3] 种方法
  // 如果装了一个 3，那么还需要装 2，有 dp[2] 种方法
  // 如果装了一个 4，那么还需要装 1，有 dp[1] 种方法
  // 如果装了一个 5，那么还需要装 0，有 dp[0] 种方法
  // 总方法数：dp[5] = dp[4] + dp[3] + dp[2] + dp[1] + dp[0] 种

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
}

const r = combinationSum4([1, 2, 3], 4);
console.log(r);

export {};
