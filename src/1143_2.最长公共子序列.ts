function longestCommonSubsequence(text1: string, text2: string): number {
  const len1 = text1.length;
  const len2 = text2.length;

  // dp[i][j]: text1 截取 [0, i-1], text2 截取 [0, j-1] ，2个字符串的最长重复子数组长度
  const dp: number[][] = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0));

  // 空字符串的情况
  dp[0][0] = 0;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // [i][j] 的前一个数，可能是 [i][j-1] 或者 [i-1][j]，这2个数推导出 [i][j]，所以从这2个数中取最大值
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    };
  };

  return dp[len1][len2];
};

// const r = longestCommonSubsequence("abcde", "ace") // 3
// const r = longestCommonSubsequence("abcde", "abc") // 3
// const r = longestCommonSubsequence("abc", "def") // 0
// const r = longestCommonSubsequence("ezupkr", "ubmrapg") // 2
const r = longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy") // "qr" 2
// const r = longestCommonSubsequence("bsbininm", "jmjkbkjkv") // "qr" 1
console.log(r);

export { }
