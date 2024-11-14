// https://leetcode.cn/problems/triangle/solutions/329143/san-jiao-xing-zui-xiao-lu-jing-he-by-leetcode-solu/?envType=study-plan-v2&envId=top-interview-150
// 动规(空间优化)
// 优化空间至 O(n)
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  // 计算下一行的值时，dp 还保持上一行的值
  // 计算 dp[j] 时，我们需要 Math.min(dp[j], dp[j-1])。从后往前计算是为了保证 dp[j-1] 的值取的上一行的值，不能被本次计算覆盖
  // 总结：后面元素的新值依赖前面元素的旧值，需要从后往前计算
  const dp: number[] = new Array(n).fill(0);

  // 先初始化第1行
  dp[0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    // 每层最后一个元素
    dp[i] = dp[i - 1] + triangle[i][i];

    // 中间元素
    for (let j = i - 1; j > 0; j--) {
      // dp[j] 依赖上一层的 dp[j-1]，所以要倒着计算，防止覆盖了 dp[j-1] （本次计算之前还是上一层的值）
      dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
    };

    // 每层第一个元素
    dp[0] += triangle[i][0];
  };

  return Math.min(...dp);
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
