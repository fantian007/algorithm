// 递归（超时）
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  // 递归
  const dfs = (i: number, j: number) => {
    // 终止条件
    if (i === n) {
      return 0;
    }

    // 自底向上 开始计算
    return Math.min(dfs(i + 1, j), dfs(i + 1, j + 1)) + triangle[i][j];
  }

  return dfs(0, 0);
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
