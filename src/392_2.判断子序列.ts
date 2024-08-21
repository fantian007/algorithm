function isSubsequence(s: string, t: string): boolean {
  // dp[i][j]: s 从 [0,i-1]，t 从 [0,j-1]，双方相同的子序列长度
  const dp: number[][] = new Array(s.length + 1).fill(0).map(_ => new Array(t.length + 1).fill(0));

  for (let i = 1; i <= s.length; i++) {
    // j 不能从上次比较相同的位置开始，前面的值不计算的话，不符合 dp 定义了
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // 不能跳出，后面的值不计算的话，不符合 dp 定义了
        // break;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    };
  };

  return dp[s.length][t.length] === s.length;
};

// const r = isSubsequence("abc", "ahbgdc"); // true
const r = isSubsequence("axc", "ahbgdc"); // false

console.log(r);

export { };
