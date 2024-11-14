// https://leetcode.cn/problems/triangle/solutions/329394/di-gui-ji-yi-hua-dp-bi-xu-miao-dong-by-sweetiee/?envType=study-plan-v2&envId=top-interview-150
// 动规
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  // 计算下一行的值时，dp 还保持上一行的值
  // 计算 dp[j] 时，我们需要 Math.min(dp[j], dp[j-1])。从后往前计算是为了保证 dp[j-1] 的值取的上一行的值，不能被本次计算覆盖
  // 总结：后面元素的新值依赖前面元素的旧值，需要从后往前计算
  const dp: number[] = new Array(n + 1).fill(0);

  // 不同点：倒序遍历三角形行
  // todo ?
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    };
  };

  return dp[0];
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
