/**
 * @see https://leetcode.cn/problems/maximal-square/solutions/234964/zui-da-zheng-fang-xing-by-leetcode-solution/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 思路：
 * 1. 如果该位置的值是 0，则 dp(i,j)=0，因为当前位置不可能在由 1 组成的正方形中；
 * 2. 如果该位置的值是 1，则 dp(i,j) 的值由其上方、左方和左上方的三个相邻位置的 dp 值决定。具体而言，当前位置的元素值等于三个相邻位置的元素中的最小值加 1
 */
function maximalSquare(matrix: string[][]): number {
  let r = 0;

  const m = matrix.length;
  const n = matrix[0].length;

  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = +matrix[i][0];
    r = Math.max(r, dp[i][0]);
  };

  for (let j = 0; j < n; j++) {
    dp[0][j] = +matrix[0][j];
    r = Math.max(r, dp[0][j]);
  };

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }

      r = Math.max(r, dp[i][j]);
    };
  };

  return r ** 2;
};

// const r = maximalSquare([
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"]]
// ); // 4

// const r = maximalSquare([
//   ["0", "1"],
//   ["1", "0"]
// ]); // 1

const r = maximalSquare(
  [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"]
  ]
); // 1

console.log(r);

export { }
