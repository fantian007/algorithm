// https://leetcode.cn/problems/triangle/solutions/329394/di-gui-ji-yi-hua-dp-bi-xu-miao-dong-by-sweetiee/?envType=study-plan-v2&envId=top-interview-150
// 动规
// 不同点：倒序遍历三角形行
// 题目要求是路径和最小，举的例子也是自顶向下，但是自底向上也一样能求出最小路径和（非递归），只要从底部向上走，路径和最小就可以了
// 自底向上好处：求某点的 (i,j) 路径和时，下一行的 (i+1, j), (i+1, j+1) 一定存在，每行的第一个节点、最后一个节点 不用再单独判断&处理
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  const dp: number[] = new Array(n + 1).fill(0);

  // 从最后一一行（底部）开始遍历
  for (let i = n - 1; i >= 0; i--) {
    // 遍历列
    for (let j = 0; j <= i; j++) {
      // 每行的 j 列，依赖下一行的 j, j + 1 列
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    };
  };

  // dp[0] 存放的值，就是最后走到顶点的值
  return dp[0];
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
