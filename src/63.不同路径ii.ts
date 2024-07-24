function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 开头/结尾 有障碍物，直接返回 0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  const dp: number[][] = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  // 初始值
  dp[0][0] = 1;
  if (n > 1) dp[0][1] = 1;
  if (m > 1) dp[1][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 已有初始值，跳过
      if ((i === 0 && j <= 1) || (j === 0 && i <= 1)) continue;

      let cnt = dp[i][j];

      // 判断左边是否有障碍物
      if (i > 0 && obstacleGrid[i - 1][j] === 0) {
        cnt += dp[i - 1][j];
      }

      // 判断上方是否有障碍物
      if (j > 0 && obstacleGrid[i][j - 1] === 0) {
        cnt += dp[i][j - 1];
      }

      dp[i][j] = cnt;
    }
  }

  return dp[m - 1][n - 1];
}

// const r = uniquePathsWithObstacles([
//   [0, 1, 0],
// ]);

// const r = uniquePathsWithObstacles([
//   [0],
//   [1],
//   [0],
// ]);

// const r = uniquePathsWithObstacles([
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ]); // 2
// const r = uniquePathsWithObstacles([
//   [0, 0],
//   [0, 1],
// ]); // 0
// const r = uniquePathsWithObstacles([[0]]); // 1
const r = uniquePathsWithObstacles([
  [1, 0],
  [0, 0],
]); // 0

console.log(r);

export {};
