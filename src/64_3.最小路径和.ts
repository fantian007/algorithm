// 穷举 + 备忘录
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 备忘录，使用Map结构来存储，比普通对象更合适，方便处理键值对，尤其是处理非字符串类型的键时更规范
  const memo = new Map<string, number>();
  return dp(0, 0);

  function dp(i: number, j: number): number {
    const key = `${i}-${j}`;
    // 先从备忘录查找
    if (memo.has(key)) {
      return memo.get(key)!;
    }

    // 到达右下角
    if (i === m - 1 && j === n - 1) {
      return grid[i][j];
    }

    let min = Infinity;

    // 可以向下移动
    if (i < m - 1) {
      min = Math.min(min, dp(i + 1, j) + grid[i][j]);
    }
    // 可以向右移动
    if (j < n - 1) {
      min = Math.min(min, dp(i, j + 1) + grid[i][j]);
    }
    // 存入备忘录
    memo.set(key, min);

    return min;
  }
}

const r = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) // 7
// const r = minPathSum([[1, 2, 3], [4, 5, 6]]) // 12
console.log(r);

export { }
