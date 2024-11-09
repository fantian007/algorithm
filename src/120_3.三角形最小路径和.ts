// https://leetcode.cn/problems/triangle/solutions/329143/san-jiao-xing-zui-xiao-lu-jing-he-by-leetcode-solu/?envType=study-plan-v2&envId=top-interview-150
// 动规（穷举，由于有 dp 的存在，重复的计算过程会跳过）
function minimumTotal(triangle: number[][]): number {
  // 行数
  const n = triangle.length;

  // dp 中存放三角形中每个数的结果，所以需要 n * n 的正方形二维数组去存，有几乎一半的空间是被浪费的，三角形占正方形的一半，空间复杂度 O(n^2)
  const dp: number[][] = new Array(n).fill(0).map(_ => new Array(n).fill(0));

  // 初始值
  dp[0][0] = triangle[0][0];

  // 遍历行
  for (let i = 1; i < n; i++) {
    // 每行的第一个元素手动初始化，上一行第一个元素 + 本行第一个元素
    // 所以下面循环从 1 开始
    dp[i][0] = dp[i - 1][0] + triangle[i][0];

    // 第 i 行的元素，最后一个元素的下标就是 i。（三角形 行+1，列数量+1，所以 i, j 保持同步）
    // dp[i][0] 手动先初始化（上一行的第一个元素前面没有元素了，先初始化好，这里的逻辑会简单一点）
    // 否则，需要对 j-1 的逻辑做额外的判断
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    };

    // 每行的最后一个元素，上一行没有与之对应的 j, 只有 j-1(相当于 i-1)
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];

    // 所以，对于 三角形，每行的第一个元素、最后一个元素，需要单独处理，中间元素可以走通用逻辑
  };

  // 后续要求最小值，先给 r 随便赋一个值（最后一行随便一个值，就取第一个吧），赋值 Infinity 也行
  let r = dp[n - 1][0];

  // 遍历最后一层元素
  for (let i = 0; i < n; i++) {
    r = Math.min(r, dp[n - 1][i]);
  };

  return r;
};

const r = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]); // 11
// const r = minimumTotal([[-10]]);
console.log(r);

export { }
