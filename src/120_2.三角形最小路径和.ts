// 递归 + 备忘录
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  // 备忘录
  const memo = {};

  // 递归
  const dfs = (i: number, j: number) => {
    const k = `${i}-${j}`;

    // 注意：一定要判断 undefined （0 会影响判断）
    if (memo[k] !== undefined) return memo[k];

    // 终止条件
    if (i === n) {
      return 0;
    }

    // 自底向上 开始计算
    const v = Math.min(dfs(i + 1, j), dfs(i + 1, j + 1)) + triangle[i][j];

    // 缓存
    memo[k] = v;
    
    return v;
  }

  return dfs(0, 0);
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
