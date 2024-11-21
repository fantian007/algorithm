/**
 * @see https://programmercarl.com/0063.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84II.html#%E7%AE%97%E6%B3%95%E5%85%AC%E5%BC%80%E8%AF%BE
 * 从 a 到 b 有几条路径，相当于 从 b 到 a 有几条路径
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径
  const dp: number[][] = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  // obstacleGrid[i][0] 遇到一次 false, 那么就停止后面的循环
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前节点有障碍，那么不可到达，路径数为 0
      if (obstacleGrid[i][j] === 1) continue;

      // 可到达，上边 + 左边
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
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
