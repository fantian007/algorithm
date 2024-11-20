// 动规
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // dp[i][j]: [i,j] 位置到右下角 路径最小和
  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  // 倒着算，因为计算最后一个点到右下角的路径和简单，就是 grid[i][j]
  dp[m - 1][n - 1] = grid[m - 1][n - 1];

  // 最后一行，只能向右顺着走（边界问题需要额外判断，预先处理）
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] += dp[i + 1][n - 1] + grid[i][n - 1];
  };

  // 最后一列，只能向下顺着走（边界问题需要额外判断，预先处理）
  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] += dp[m - 1][j + 1] + grid[m - 1][j];
  };

  // 处理中间部分
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + grid[i][j];
    };
  };

  // 倒着算的，返回 起始点 值
  return dp[0][0];
}

// const r = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) // 7
const r = minPathSum([[1, 2, 3], [4, 5, 6]]) // 12
console.log(r);

export { }
