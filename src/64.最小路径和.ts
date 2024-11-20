// 穷举（超时）
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let min: number = Infinity;

  const dp = (i: number, j: number, prev: number) => {
    // 中途超出边界，直接中断递归
    // 未达到右下角就返回，这也是整个 dp 不能有返回值的原因（下一版本优化）
    if (i === m || j === n) {
      return;
    }

    const v = grid[i][j] + prev;

    if (i === m - 1 && j === n - 1) {
      min = Math.min(min, v);
      return;
    }

    dp(i + 1, j, v);
    dp(i, j + 1, v);
  }

  dp(0, 0, 0);

  return min;
};

const r = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) // 7
// const r = minPathSum([[1, 2, 3], [4, 5, 6]]) // 12
console.log(r);

export { }
