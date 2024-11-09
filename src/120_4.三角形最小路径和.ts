// https://leetcode.cn/problems/triangle/solutions/329143/san-jiao-xing-zui-xiao-lu-jing-he-by-leetcode-solu/?envType=study-plan-v2&envId=top-interview-150
// 动规(空间优化)
// 每一层的结果依赖于上一层结果，和更之前的层数无关，所以一共需要 2 个一维数组，或者创建一个二维数组，只有2行
// 2 行利用奇偶性交替的进行状态转移
// 第一行保留上次结果值，计算出来的新状态放到第二行。然后再由第二行计算出来的新结果放到第一行，交替进行。
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  // 2 行的二维数组，优化空间复杂度到 O(2n)
  const dp: number[][] = new Array(2).fill(0).map(_ => new Array(n).fill(0));

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    // 行变少了，但是列不变，之前的 i-1 行变为了 prev，i 行变为了 cur
    const cur = i % 2; // 奇偶性 计算出当前行索引
    const prev = 1 - cur; // 计算另一行索引

    // 每层 第一个元素
    dp[cur][0] = dp[prev][0] + triangle[i][0];
    // 中间元素
    for (let j = 1; j < i; j++) {
      dp[cur][j] = Math.min(dp[prev][j - 1], dp[prev][j]) + triangle[i][j];
    };
    // 每层 最后一个元素
    dp[cur][i] = dp[prev][i - 1] + triangle[i][i];
  };

  let r = Infinity;

  for (let i = 0; i < n; i++) {
    // 遍历当前行的元素
    r = Math.min(r, dp[(n - 1) % 2][i]);
  };

  return r;
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
