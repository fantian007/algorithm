// nums 是商品，每个商品只能选一次，0-1 背包问题
// 二维数组：其实可以发现如果把dp[i - 1]那一层拷贝到dp[i]上，表达式完全可以是：dp[i][j] = max(dp[i][j], dp[i][j - weight[i]] + value[i]);
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);

  // 总和不能拆成2个相同的整数，直接 false
  if (sum % 2 === 1) {
    return false;
  }

  // 每个子集的和（单包容量）
  const bagSize = sum / 2;

  // dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。
  // dp[j] 表示容量为j的背包，所背的物品价值可以最大为dp[j]。
  const dp = new Array(bagSize + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    // 混动数组，内层循环需要倒序遍历
    // @see https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-2.html#%E6%80%9D%E8%B7%AF
    for (let j = bagSize; j >= nums[i]; j--) {
      // 占用了背包 nums[i] 个体积，背包里面商品所占体积增加了 nums[i]，消耗是体积，收益也是体积
      // 别的场景：消耗是重量/体积，收益是金额
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[bagSize] === bagSize;
}

const r = canPartition([1, 5, 11, 5]);
console.log(r);

export {};
