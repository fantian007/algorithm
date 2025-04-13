// 题目：给出此算法题的最优解。
// 小明拥有一个长度为n的数组 a，由于他非常喜欢数字 w，他希望将所有数组中的数都变为 w。
// 小明每次操作可以选择一个区间 [l, r]，并将该区间内的所有数字都加 1（包括左右边界 l 和 r）。但为了让挑战更具趣味性，小M要求每次操作的l均不相同，r也均不相同。
// 小明现在想知道，有多少种不同的操作方案可以让数组中的所有数都变为 w。注意，如果所有操作的区间相同，则视为同一种操作方式，操作顺序不同并不会形成新的方案。

// todo 没理解
const countWaysToTransformArray = (a: number[], w: number) => {
  const n = a.length;

  // 每个数 和 w 的差值
  const diff = a.map(v => w - v);

  const dp: number[][] = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j > 0 && diff[i - 1] > 0) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    };
  };

  let r = 0;
  for (let j = 0; j <= n; j++) {
    r += dp[n][j];
  };

  return r;
}

const r = countWaysToTransformArray([1, 2, 3], 3);
console.log(r);

export { }
