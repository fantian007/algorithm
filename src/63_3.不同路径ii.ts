// 穷举 + 备忘录
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 备忘录
  const memo = new Map<string, number>();

  // 穷举
  const dp = (i: number, j: number): number => {
    const key = `${i}-${j}`;

    // 优先从备忘录查找
    if (memo.has(key)) {
      return memo.get(key)!;
    }

    // 越界情况，返回0条路径（因为超出范围就没办法到达终点了）
    if (i === m || j === n) {
      return 0;
    }

    // 如果当前位置是障碍物，返回0条路径（无法从此处通过）
    if (obstacleGrid[i][j] === 1) {
      return 0;
    }

    // 到达终点，返回1条路径（已经成功到达终点了）
    if (i === m - 1 && j === n - 1) {
      /**
       * 注意这里是 1，不是 r++ 之类的累计值
       * 这个 1 代表 某个位置 能到达终点，会一直回溯向上传递
       */
      return 1;
    }

    // 向下
    const downPaths = dp(i + 1, j);
    // 向右
    const rightPaths = dp(i, j + 1);
    // 相加
    const sum = downPaths + rightPaths;

    // 存入备忘录
    memo.set(key, sum);

    return sum;
  }

  return dp(0, 0);
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

export { };
