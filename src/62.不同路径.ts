function uniquePaths(m: number, n: number): number {
  // dp[i][j] 处有 n 条路径到达
  const dp: number[][] = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  // dp 表格
  dp[0][0] = 1;
  if (n > 1) dp[0][1] = 1;
  if (m > 1) dp[1][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 初始值开头已赋值，跳过
      if ((i === 0 && j <= 1) || (j === 0 && i <= 1)) continue;

      // 递推公式
      dp[i][j] = (j > 0 ? dp[i][j - 1] : 0) + (i > 0 ? dp[i - 1][j] : 0);
    }
  }

  // 取最后结果
  return dp[m - 1][n - 1];
}

// const r = uniquePaths(3, 7); // 28
// const r = uniquePaths(3, 2); // 3
const r = uniquePaths(1, 1); // 1
console.log(r);

export {};
