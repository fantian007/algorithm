// 动规
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 省略 dp 数组，从后往前算，grid 后面的部分不再用到，可以用来存放计算结果

  // 最后一行，只能向右顺着走（边界问题需要额外判断，预先处理）
  for (let i = m - 2; i >= 0; i--) {
    grid[i][n - 1] += grid[i + 1][n - 1];
  };

  // 最后一列，只能向下顺着走（边界问题需要额外判断，预先处理）
  for (let j = n - 2; j >= 0; j--) {
    grid[m - 1][j] += grid[m - 1][j + 1];
  };

  // 处理中间部分
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      grid[i][j] = Math.min(grid[i + 1][j], grid[i][j + 1]) + grid[i][j];
    };
  };

  // 倒着算的，返回 起始点 值
  return grid[0][0];
}

// const r = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) // 7
const r = minPathSum([[1, 2, 3], [4, 5, 6]]) // 12
console.log(r);

export { }
