// 分成2个子集，子集元素和相等
// 每个商品只能选一次，0-1 背包问题
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);

  // 总和不能拆成2个相同的整数，直接 false
  if (sum % 2 === 1) {
    return false;
  }

  // 每个子集的和（单包容量）
  const bagSize = sum / 2;

  const weightArr = nums;
  const valueArr = nums;
  const goodsCnt = weightArr.length;

  // 一维下标：第 n 个物品
  // 二维下标，如放入当前物品（之前可能已经放入其它物品），各个背包的重量
  const dp = new Array(goodsCnt)
    .fill(0)
    .map((_) => new Array(bagSize + 1).fill(0));

  // i < weightArr[0] 的情况，表示背包容纳重量比第一个物品的重量还要小，背包内物品重量为0，前面已经初始化过了
  // 这是使用第一个物品的重量，来初始化各个背包的初始重量
  for (let i = weightArr[0]; i <= bagSize; i++) {
    // 放入第一个物品，各个背包的重量
    dp[0][i] = valueArr[0];
  }

  // dp[0] 已初始化，从 1 开始
  for (let i = 1; i < goodsCnt; i++) {
    for (let j = 0; j <= bagSize; j++) {
      // 背包容量比 物品i 还小
      if (j < weightArr[i]) {
        dp[i][j] = dp[i - 1][j];
      }
      // 当前背包可以放入物品 i
      else {
        dp[i][j] = Math.max(
          // 不放入, 物品 i 的重量可能已经大于剩余容量，放不进去了
          dp[i - 1][j],
          // 放入，dp[i-1][j - weightArr[i]]：当背包容量为 j-weightArr[i] 时的最大价值，再放入物品i，得到 dp[i][j] 最大价值
          dp[i - 1][j - weightArr[i]] + weightArr[i]
        );
      }
    }
  }

  // 判断 dp 最右下角的值 === sum/2
  return dp[goodsCnt - 1][bagSize] == bagSize;
}

// const r = canPartition([1, 5, 11, 5]); // true
const r = canPartition([2, 2, 1, 1]); // true
console.log(r);

export {};
