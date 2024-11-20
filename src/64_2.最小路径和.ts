// 穷举（超时）
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 有返回值版本
  const dp = (i: number, j: number) => {
    if (i === m - 1 && j === n - 1) {
      return grid[i][j];
    }

    let min: number = Infinity;

    // 向下
    if (i < m - 1) {
      min = Math.min(min, dp(i + 1, j) + grid[i][j]);
    }

    // 向右
    if (j < n - 1) {
      min = Math.min(min, dp(i, j + 1) + grid[i][j]);
    }

    return min;
  }

  return dp(0, 0);
};

// const r = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) // 7
const r = minPathSum([[1, 2, 3], [4, 5, 6]]) // 12
console.log(r);

export { }
