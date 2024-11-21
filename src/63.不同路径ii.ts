function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 开头/结尾 有障碍物，直接返回 0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  // dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径
  const dp: number[][] = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  // 初始值
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      // 判断左边是否有障碍物
      if (i > 0 && obstacleGrid[i - 1][j] === 0) {
        dp[i][j] += dp[i - 1][j];
      }

      // 判断上方是否有障碍物
      if (j > 0 && obstacleGrid[i][j - 1] === 0) {
        dp[i][j] += dp[i][j - 1];
      }
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

const r = uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]); // 2
// const r = uniquePathsWithObstacles([
//   [0, 0],
//   [0, 1],
// ]); // 0
// const r = uniquePathsWithObstacles([[0]]); // 1
// const r = uniquePathsWithObstacles([
//   [1, 0],
//   [0, 0],
// ]); // 0

console.log(r);

export {};
