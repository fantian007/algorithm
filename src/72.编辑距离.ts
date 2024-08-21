function minDistance(word1: string, word2: string): number {
  const len1 = word1.length;
  const len2 = word2.length;

  // dp[i][j]：word1 取 [0, i-1], word2 取 [0, j-1], 2者相等的最少操作数
  const dp = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0));

  // word2 为空， word1 删 i 次
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  };

  // word1 为空，word2 删 j 次
  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  };

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 相等，不用做任何操作
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        /**
         * 不相等，有3种情况
         * 1. 不相等的当前字符直接替换成一样的
         * 2. word1 的上一次比较基础上 + 新增 word2 最后一位一样的字符
         * 3. word2 的上一次比较基础上 + 新增 word1 最后一位一样的字符
         */
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    };
  };

  return dp[len1][len2];
};

const r = minDistance('horse', 'ros'); // 3
// const r = minDistance('intention', 'execution'); // 5
console.log(r);



export { };
