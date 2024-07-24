function uniquePaths(m: number, n: number): number {
  // dp[i][j]：走到 [i][j] 位置处有 dp[i][j] 种路径
  const dp = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  // 最上边一层都是只有一种路径
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // 最左边一列都是只有一种路径
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前位置 可以 从上边或者左边 过来
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

const t = uniquePaths(3, 7);
console.log(t);

export {};
